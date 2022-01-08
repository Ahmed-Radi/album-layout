import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        // padding: '20px auto'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '40px 0'
    }
}))

export default useStyles;