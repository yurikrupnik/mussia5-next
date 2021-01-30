import React, { useCallback, memo } from "react";
import { useField } from "formik";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { DropDownOptions } from "../../src/types";

interface Props {
    name: string;
    disabled?: boolean;
    fullWidth?: boolean;
    multiline?: boolean;
    size?: "medium" | "small";
    type?: string;
    label?: string;
    rows?: number;
    options?: DropDownOptions;
    onChange?: () => void;
    handleChangeCallback?: () => void;
    MenuOption?: React.ReactElement;
    endAdornment?: React.FC;
    startAdornment?: React.FC;
    defaultValue?: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    style?: {};
    variant?: "standard" | "filled" | "outlined";
}

const FormField: React.FC<Props> = (props) => {
    const {
        style = {},
        disabled = false,
        fullWidth = false,
        size = "medium",
        type = "text",
        name,
        label = "",
        multiline = false,
        rows = 0,
        variant = "standard",
        options = [],
        defaultValue,
        endAdornment = <span />,
        startAdornment = <span />,
    } = props;

    const field = useField(name);
    const [{ value, onChange, onBlur }, { touched, error }] = field;
    const handleOnChange = useCallback((e) => {
        onChange(e);
    }, []);

    const myP = useCallback(
        (item) => (
            <MenuItem key={item._id} value={item._id}>
                {item.name}
            </MenuItem>
        ),
        []
    );

    if (type === "select") {
        return (
            <FormControl style={style} fullWidth={fullWidth} component="div">
                <TextField
                    size={size}
                    disabled={disabled}
                    variant={variant}
                    multiline={multiline}
                    rows={rows}
                    label={label}
                    name={name}
                    onChange={handleOnChange}
                    error={touched && !!error}
                    helperText={touched && error}
                    select
                    value={value}
                >
                    {options.map(myP)}
                </TextField>
            </FormControl>
        );
    }
    return (
        <FormControl style={style} fullWidth={fullWidth} component="div">
            <TextField
                size={size}
                disabled={disabled}
                type={type}
                variant={variant}
                multiline={multiline}
                rows={rows}
                label={label}
                value={value}
                name={name}
                defaultValue={defaultValue}
                onChange={handleOnChange}
                onBlur={onBlur}
                error={touched && !!error}
                helperText={touched && error}
                InputProps={{
                    startAdornment,
                    endAdornment,
                }}
            />
        </FormControl>
    );
};

export default memo(FormField);
