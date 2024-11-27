import {createFromIconfontCN} from "@ant-design/icons";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4752498_9oks0w4g2g6.js',
});


function Index(props: {
    type: string,
    className?: string,
    color?: string,
    size: number,
    onClick?: (e?: any) => void,
}) {

    return (
        <IconFont
            type={props.type}
            style={{
                color: props.color,
                fontSize: props.size,
            }}
            className={props.className}
            onClick={(e) => {
                if (props.onClick) {
                    props.onClick(e)
                }
            }}
        />
    )
}

export default Index
