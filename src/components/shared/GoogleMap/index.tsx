// import GoogleMapReact from 'google-map-react';
interface Props{
    heightMap?:string,
    widthMap?:string,
    center : {lat:number, lng:number}
    children:any
}

export const InitMap = (props:Props)=>{
    const API_KEY ="" // Api key of google platform

    const {
        heightMap="100vh",
        widthMap="100%"
    }=props

    const defaultProps = {
        center: props.center,
        zoom:10
    }

    return(
        <>
            <div style={{ height: heightMap, width: widthMap }}>
                {/* <GoogleMapReact
                    bootstrapURLKeys={{key:API_KEY}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    {props.children}
                </GoogleMapReact> */}
            </div>
        </>
    )

    
}
