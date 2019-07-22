const quadrant = {
    calc: (degrees, ) => {
        while (degrees >= 360) {
            degrees -= 360;

        }
        
        if (degrees === 360 || degrees === 0 || degrees < 90 && degrees > 0) {
            return 1;
        } else if (degrees < 360 && degrees >= 270) {
            return 4;
        } else if (degrees >= 180) {
            return 3;
        } else if (degrees >= 90) {
            return 2;
        }
    }
}

export { quadrant };