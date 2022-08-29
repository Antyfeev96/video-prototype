import {useEffect} from "react";
import {Grid} from "react-virtualized";
import {Fragment} from "./Fragment";

const FragmentTimeline = ({fragments}) => {

    const fragmentsLen = Object.keys(fragments).length
    useEffect(() => {
        console.log({fragments})
    }, [fragments])

    return (
        <>
            {fragments && <Grid
                cellRenderer={({columnIndex, key}) => {
                    console.log(columnIndex)
                    return (
                        <Fragment
                            key={key}
                            {...fragments[columnIndex]}
                        />
                    )
                }}
                columnCount={fragmentsLen}
                columnWidth={20}
                height={50}
                rowCount={1}
                rowHeight={30}
                width={300}
            />}
        </>
    )

};

export default FragmentTimeline
