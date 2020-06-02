import loadingImg from '../assets/images/iconmonstr-loading-12.svg'

const imgStyle = {
	width: '20%',
	position: 'fixed',
	top: '40%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	animation: 'rotation 8s infinite linear'
}

function LoadingIndicator() {
	return <img style={imgStyle} src={loadingImg} />
}

export default LoadingIndicator