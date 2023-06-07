import { Button as ButtonMUI } from "@mui/material";

interface IButton {
    Variant: 'contained' | 'outlined',
    Text: string
}

export const Button = ({
    Variant, Text
}:IButton) => {
    switch(Variant)
    {
        case 'contained':
            return (
                <ButtonMUI color="success" variant={Variant}>
                    {Text}
                </ButtonMUI>
            );
        case 'outlined':
            return (
                <ButtonMUI color="success" variant={Variant} >
                    {Text}
                </ButtonMUI>
            );
    }
}