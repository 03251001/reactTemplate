import {createFromIconfontCN} from "@ant-design/icons";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4752498_sk54m5v4xc.js',
});


function Index(props: {
    type: string,
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
            onClick={(e) => {
                if (props.onClick) {
                    props.onClick(e)
                }
            }}
        />
    )
}

export default Index
