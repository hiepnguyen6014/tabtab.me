import { FormControl, MenuItem, Select, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            "& .MuiInputBase-root": {
                minWidth: "189px",
                borderRadius: "8px",
                color: "#222222",
                backgroundColor: '#fff',
                justifyContent: "center",

                [theme.breakpoints.down('sm')]: {
                    minWidth: "166px"
                }
            },

            "& .MuiInputBase-input": {
                padding: "12px",
            },

            "& .MuiOutlinedInput-root": {
                height: "46px", // set height default
                "&.Mui-focused fieldset": {
                    border: "1px solid #E9E9E9"
                }
            },

            "& .MuiSelect-select.MuiSelect-select": {
                paddingRight: "0px",
                "& span": {
                    marginBottom: "0"
                },
            }
        },
        select: {
            // width: "auto",
            height: "auto",
            fontSize: "14px",
            "&:focus": {
                backgroundColor: "transparent"
            }
        },
        selectIcon: {
            // position: "relative",
            color: "#222222",
            fontSize: "20px"
        },

        paper: {
            borderRadius: 12,
            marginTop: 8
        },

        list: {
            paddingTop: 0,
            paddingBottom: 0,
            "& li": {
                fontWeight: 200,
                paddingTop: 8,
                paddingBottom: 8,
                fontSize: "14px"
            },

            "& li.Mui-selected": {
                color: "#fff",
                background: "#F9BD06 !important"
            },

            "& li.Mui-selected:hover": {
                // background: "#6EC177"
            }
        }
    })
);

interface Item {
    key: string,
    value: number
}

interface Props {
    value: number,
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
    items: Item[],
    placeholder: string
}

const DropDown = ({ value, onChangeValue, items, placeholder }: Props) => {
    const classes = useStyles();

    const menuProps = {
        classes: {
            list: classes.list,
            paper: classes.paper
        },
        anchorOrigin: {
            vertical: "bottom" as "bottom",
            horizontal: "center" as "center"
        },
        transformOrigin: {
            vertical: "top" as "top",
            horizontal: "center" as "center"
        },
    };

    return (
        <FormControl className={classes.formControl} size="medium">
            <Select
                value={value}
                onChange={onChangeValue}
                disableUnderline
                placeholder="asda"
                sx={{
                    '& legend': { display: 'none' }, '& fieldset': { top: 0 },
                    '& .MuiSelect-select .notranslate::after': placeholder
                        ? {
                            content: `"${placeholder}"`,
                            opacity: 0.42
                        }
                        : {},
                }}
                MenuProps={menuProps}
                color="primary"
                classes={{
                    select: classes.select,
                    icon: classes.selectIcon
                }}
            >
                {items.map((item) => (
                    <MenuItem key={item.key} value={item.value}>
                        {item.key}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default DropDown;
