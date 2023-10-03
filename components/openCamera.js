import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router'

export default function OpenCamera({ ...props }) {

    const videoRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [stream, setStream] = useState(null); // Save the stream to state

    const getUserMedia = (constraints) => {
        if (navigator.mediaDevices) {
            return navigator.mediaDevices.getUserMedia(constraints);
        }

        const legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia;

        if (legacyApi) {
            return new Promise((resolve, reject) => {
                legacyApi.bind(navigator)(constraints, resolve, reject);
            });
        }
    };

    const stopCameraOrFile = () => {
        if (stream) {
            let tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            setStream(null);
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        }
        // Redefina selectedFile e checkFile
        setSelectedFile(null);
        setCheckFile(false);
    };


    const toggleVideo = () => {
        if (stream) {
            stopCameraOrFile();
        } else {
            if (stream) {
                // Se a stream estiver ativa, desligue-a
                let tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                setStream(null); // Limpa a stream salva
                if (videoRef.current) {
                    videoRef.current.srcObject = null; // Limpa a fonte do vídeo
                }
            } else {
                // Se a stream não estiver ativa, inicie-a
                if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
                    !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
                    alert('User Media API not supported.');
                    return;
                }

                const constraints = { video: true };

                getUserMedia(constraints)
                    .then((newStream) => {
                        setStream(newStream);  // Salva a stream no state
                        const video = videoRef.current;
                        if ('srcObject' in video) {
                            video.srcObject = newStream;
                        } else {
                            video.src = (window.URL || window.webkitURL).createObjectURL(newStream);
                        }
                        video.play();
                    })
                    .catch((err) => {
                        alert('Error: ' + err);
                    });
            }
        }
    }

    const [lastAction, setLastAction] = useState(null);

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        const dataURL = canvas.toDataURL('image/png');

        setImageSrc(dataURL);
        setLastAction('capture'); // Defina a última ação como 'capture'

        // Redefina selectedFile e checkFile
        setSelectedFile(null);
        setCheckFile(false);
    };




    // File

    const router = useRouter()

    const [data, setData] = useState({
        equipamento: "",
        codigo_equipamento: "",
        sala_laboratorio: "",
        defeito: "",
        imagem: ""
    });

    function sendData(e) {
        e.preventDefault();
        console.log(data);
    }

    const changeInputValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // Imagem Input

    const [selectedFile, setSelectedFile] = useState(null);
    const [checkFile, setCheckFile] = useState(false);

    const imageHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        setCheckFile(true);
        setData({ ...data, imagem: e.target.files[0] });
        setLastAction('upload'); // Defina a última ação como 'upload'
    };


    // Selecionar uma imagem ou abrir a camera
    const [selectImage, setSelectImage] = useState('');

    function selectImageFile() { setSelectImage('image') }

    function selectCamera() { setSelectImage('camera') }

    let imageToRender = null;

    if (lastAction === 'capture') {
        imageToRender = imageSrc;
    } else if (lastAction === 'upload' && checkFile && selectedFile) {
        imageToRender = URL.createObjectURL(selectedFile);
    }

    const handleSendImage = () => {
        if (!imageToRender) {
            console.error("Nenhuma imagem disponível para enviar!");
            return;
        }
        console.log(imageToRender);
        props.closeModalCamera();
        stopCameraOrFile();
        // Você pode adicionar mais lógica aqui se quiser enviar a imagem para um servidor, por exemplo.
    };



    return (

        <div className='bg-modal-shadow fixed w-screen h-screen top-0 right-0 flex items-center justify-center z-10'>
            <div className="w-8/12 drop-shadow-lg bg-white py-4 rounded-lg absolute flex items-center justify-center flex-col top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
                <div className='flex items-center justify-evenly flex-row w-11/12'>
                    <h1 className='my-5 text-lg'>Tire uma foto</h1>
                    <button onClick={() => {
                        stopCameraOrFile();
                        props.closeModalCamera();
                    }} className='w-10 h-10'>
                        <img src="/closeIcon.svg" alt="Icone de fechar/sair" />
                    </button>
                </div>
                <div className='w-full flex items-center justify-evenly flex-row'>
                    <div className='w-full flex items-center justify-center flex-col'>
                        <video className={`rounded-lg m-2 ${stream ? '' : 'hidden'}`} ref={videoRef} autoPlay style={{ height: 180, width: 240 }}></video>
                        <div className='w-full flex items-center justify-evenly flex-row my-4'>
                            <button onClick={toggleVideo}>
                                {stream
                                    ? <img className='h-10 w-10' src='/openCameraIcon.svg' alt='Icone de abrir a camera' />
                                    : <img className='h-10 w-10' src='/closeCameraIcon.svg' alt='Icone de fechar a camera' />
                                }
                            </button>
                            <button onClick={capturePhoto}><img className={`h-10 w-10 ${stream ? '' : 'hidden'}`} src='/takePhotoIcon.svg' alt='Icone de tirar foto' /></button>
                            <div className='h-10 w-10 flex items-center justify-evenly flex-row'>
                                <input type="file" name="file" onChange={imageHandler} className="z-20 opacity-0 cursor-pointer h-10 w-10" />
                                <div className="absolute flex justify-center items-center gap-2">
                                    <img className={`h-10 w-10 rounded-full}`} src='/attachFileIcon.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-[320px] grid gap-2">
                        <div className="h-24 cursor-pointer relative flex justify-center items-center rounded-md bg-senac-yellow-40">
                            <input type="file" name="file" onChange={imageHandler} className="z-20 opacity-0 cursor-pointer h-full w-full" />
                            <div className="absolute flex justify-center items-center gap-2">
                                <img className={`h-10 w-10 rounded-full ${checkFile ? 'opacity-1' : 'opacity-0'}`} src={selectedFile ? URL.createObjectURL(selectedFile) : null} />
                                <span className="text-[18px] w-56 truncate">{checkFile ? (selectedFile ? selectedFile.name : 'Imagem Selecionada') : 'Enviar uma Imagem'}</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                {imageToRender && (
                    <div className="mt-4 w-36 h-36">
                        <img className="rounded-lg w-full h-full object-cover" src={imageToRender} alt="Preview" />
                    </div>
                )}
                <button onClick={handleSendImage} className="my-6 text-sm bg-senac-yellow-70 w-24 h-10 text-white flex items-center justify-center rounded-lg">
                    Enviar
                </button>
            </div>
        </div>
    )
}