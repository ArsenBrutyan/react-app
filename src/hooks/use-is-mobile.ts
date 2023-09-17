import { useMediaQuery } from 'react-responsive';
import { MediaConfig } from 'constants/media-config';

export const useIsMobile = () => {
    const deviceType: string = MediaConfig.mobileLargerPortraitMax;

    const isMobile = useMediaQuery({
        query: `(max-width: ${deviceType})`,
    });

    const isDesktop = useMediaQuery({
        query: `(min-width: ${deviceType})`,
    });

    if (
        deviceType === MediaConfig.mobileLandscapeMax ||
        deviceType === MediaConfig.mobileLargerPortraitMax
    ) {
        return isMobile;
    } else if (
        deviceType === MediaConfig.desktopSMMax ||
        deviceType === MediaConfig.tabletMax
    ) {
        return isDesktop;
    }

    return false;
};
