function Piece(props) {
    let pos = props.position;
    let num = props.num;
    let idx = props.idx;
    function pieceCallBack() {
        props.clickHandler(pos, idx)
    }
    if (props.blank) {
        pos = pos.concat(" blank")
    }
    return (
        <div onClick={pieceCallBack} className={pos}>
            <div className="box">
                {num}
            </div>
        </div>
    )

}
export default Piece;