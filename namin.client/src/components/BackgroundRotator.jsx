import { useEffect, useState } from 'react';

const images = [
    'assets/Namin3.png',
    'assets/bg1.png',
    'assets/bg3.png',
    /*'assets/Namin1.png',*/
    'assets/Namin2.png',
    'assets/Namin5.png',
];

function BackgroundRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => (i + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, width: '100vw', height: '100vh',
                zIndex: 0,
                backgroundImage: `url(${images[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
                pointerEvents: 'none'
            }}
            aria-hidden="true"
        />
    );
}

export default BackgroundRotator;


////////////////////////////////

//import { useEffect, useState } from 'react';

//// Use your own image paths or URLs
//const images = [
//    '/assets/bg1.jpg',
//    '/assets/bg2.jpg',
//    '/assets/bg3.jpg'
//];

//function BackgroundRotator() {
//    const [index, setIndex] = useState(0);

//    useEffect(() => {
//        const interval = setInterval(() => {
//            setIndex(i => (i + 1) % images.length);
//        }, 5000); // Change every 5 seconds
//        return () => clearInterval(interval);
//    }, []);

//    return (
//        <div
//            style={{
//                position: 'fixed',
//                top: 0, left: 0, width: '100vw', height: '100vh',
//                zIndex: 0,
//                backgroundImage: `url(${images[index]})`,
//                backgroundSize: 'cover',
//                backgroundPosition: 'center',
//                transition: 'background-image 1s ease-in-out',
//                pointerEvents: 'none' // ensures background doesn't block clicks
//            }}
//            aria-hidden="true"
//        />
//    );
//}

//export default BackgroundRotator;
//////////////////////////////////

//import { useEffect, useState } from 'react';

//// Add your image imports or URLs here
//const images = [
//    '/assets/bg1.png',
//    '/assets/bg2.png',
//    '/assets/bg3.png'
//];

//function BackgroundRotator() {
//    const [index, setIndex] = useState(0);

//    useEffect(() => {
//        const interval = setInterval(() => {
//            setIndex(i => (i + 1) % images.length);
//        }, 5000); // Change every 5 seconds
//        return () => clearInterval(interval);
//    }, []);

//    return (
//        <div
//            style={{
//                position: 'fixed',
//                top: 0, left: 0, width: '100vw', height: '100vh',
//                zIndex: 0,
//                backgroundImage: `url(${images[index]})`,
//                backgroundSize: 'cover',
//                backgroundPosition: 'center',
//                transition: 'background-image 1s ease-in-out'
//            }}
//            aria-hidden="true"
//        />
//    );
//}

//export default BackgroundRotator;
