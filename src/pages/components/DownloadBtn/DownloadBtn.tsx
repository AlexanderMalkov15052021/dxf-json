import { ConverterStor } from "@/entities";
import { Button } from "antd/lib";
// import Link from "antd/lib/typography/Link";
import { observer } from "mobx-react-lite";

const DownloadBtn = observer(() => {
    const {
        store: { href },
    } = ConverterStor;

    return <>
        <Button className="buttun-upload" disabled={href ? false : true} type={"primary"}>
            <a
                href={`${href ? href : ""}`} download={"example.json"}
            >
                Скачать .json
            </a>
        </Button>
    </>
});

export default DownloadBtn;