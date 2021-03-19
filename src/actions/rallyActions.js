import { 
    START_RALLYING,
    STOP_RALLYING
} from './types';

export const startRallying = ({interest, accent, accentBorder, accentTint }) => dispath => {
    dispath({
        type: START_RALLYING,
        payload: {
            interest,
            accent,
            accentBorder,
            accentTint
        }
    })
};

export const stopRallying = () => dispath => {
    dispath({ type: STOP_RALLYING })
};