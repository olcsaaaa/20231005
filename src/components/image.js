function Image(params) {
    const {src, description} = params;
    return (
        <div className={"imageContainer"}>
        <img alt={"React logo"} src={src} width={250} className={"Image"}/>
            <small>{description}</small>
        </div>
    )

}
// Image.PropTypes = {
//     src : PropTypes.string.isRequired
// }
export default Image;