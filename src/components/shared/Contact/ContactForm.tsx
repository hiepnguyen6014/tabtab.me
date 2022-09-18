import { ROUTES } from "@constants"
import { Button, TextareaAutosize, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconChart, IconLease, IconNews, IconProject, IconRecharge, IconSell } from "@root/public/icons"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import InputField from "../mui/form-controls/InputField";

interface Props {
    onSubmit: () => void;

}


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        // margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        // margin: theme.spacing(3, 0, 2),
    },
    progress: {
        position: 'absolute',
        // marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
}));


export const ContactForm = (props: Props) => {
    // const { t } = props
    const classes = useStyles();

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            // await onSubmit(values);
        }
        // form.reset();
    };


    return (
        <div className={classes.form}>
            {/* {isSubmitting && <LinearProgress />} */}
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                    <LockOutlined></LockOutlined>
                </Avatar> */}

                <Typography component="h1" variant="h5">
                    Contact form
                </Typography>
            </div>

            <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="name" label="Name" form={form} />
                <InputField name="phone" label="Phone" form={form} />
                <InputField name="email" label="Email" form={form} />
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Write message to agent here"
                    style={{ width: '100%' }}
                />
                <Button
                    // disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    color="primary"
                    variant="contained"
                    fullWidth
                    style={{ textTransform: 'none' }}
                >
                    Contact Agents
                </Button>


            </form>
        </div>
    )
}