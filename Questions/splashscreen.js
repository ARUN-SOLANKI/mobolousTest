//  You can emit events using socket.emit() and listen for events using socket.on().
//  Remember to clean up event listeners using socket.off() when the component unmounts.
[1:22 PM] // Q:- How to apply gif image as a splash screen

// const { LinkingContext } = require("@react-navigation/native")

// step 1

// first i install a librery known as "lottie-react-native" by run the command 
// npm i lottie-react-native

// step2

//  import lottie object from  "lottie-react-native" and import {Animated, Easing} from "react-native"
// in upper level of the commponent
// import {StyleSheet, View, Animated, Easing} from 'react-native';
// import Lottie from 'lottie-react-native';


// step3

// create a animated view for lotie component which is responsible for creating a full view 
// or animated View of the Image for creating Images we are using Json present in splashJson folder 

// animated View is Look Like 

// {animationIsVisible && (
//   <Animated.View
//     style={[
//       StyleSheet.absoluteFill,
//       {
//         backgroundColor: '#FFFFFF',
//         alignItems: 'center',
//         justifyContent: 'center',
//         opacity: opacity.current,
//       },
//     ]}>
//     <Lottie
//       ref={ref}
//       source={require('./src/splashJson/splash01.json')}
//       loop={false}
//       progress={progress.current}
//       resizeMode="cover"
//     />
//   </Animated.View>
// )}

// this view only visible at the first time when app in mounted

// and here is a function which mannage the animation timing 

// const opacity = useRef(new Animated.Value(1));
// const progress = useRef(new Animated.Value(0));
// useEffect(() => {
//   const unsubscribe = setTimeout(() => {
//     if (!progress.current) {
//       return null;
//     }

//     Animated.sequence([
//       Animated.timing(progress.current, {
//         toValue: 1,
//         useNativeDriver: true,
//         duration: 2000,
//         easing: Easing.ease,
//       }),
//       Animated.timing(opacity.current, {
//         delay: 250,
//         toValue: 0,
//         useNativeDriver: true,
//         duration: 250,
//         easing: Easing.in(Easing.ease),
//       }),
//     ]).start(() => {
//       setAnimationIsVisible(false);
//     });
//   }, 500);
//   return () => {
//     clearTimeout(unsubscribe);
//   };
// }, []);