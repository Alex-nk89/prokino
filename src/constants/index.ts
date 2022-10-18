export const bgColor: string = '#161c24'
export const MAIN_COLOR: string = '#fa541c'
export const MAIN_COLOR_HOVER: string = '#b3200e'
export const BGCOLOR_INPUT: string = '#919eab14'
export const BGCOLOR_INPUT_HOVER: string = '#919eab29'
export const BGCOLOR_INPUT_FOCUSED: string = '#919eab3d'
export const SKELETON_COLOR: string = 'grey.800'

export const INPUT_STYLE = {
    '&': {
        borderRadius: '12px',
        border: 'none',
        outline: 'none',
        background: BGCOLOR_INPUT,
        color: 'white',
    },
    '& fieldset': {
        border: 'none',
        outline: 'none',
    },
    '&:hover fieldset': {
        background: BGCOLOR_INPUT_HOVER,
    },
    '& .MuiInputBase-root': {
        borderRadius: '12px',
        color: 'white',
        '&.Mui-focused fieldset': {
            background: BGCOLOR_INPUT_FOCUSED,
        },
    },
};

export const BUTTON_STYLE = {
    background: MAIN_COLOR,
    borderRadius: '12px',
    minWidth: '120px',
    color: 'white',
    '&:hover': {
        background: MAIN_COLOR_HOVER
    }
}