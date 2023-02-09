
const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px black solid',
        position: 'absolute',
        top: '30px',
        right: '-30px',
    }} />
);

const BODY = (
    <div style={{
        width: '10px',
        height: '100px',
        background: 'black',
        position: 'absolute',
        top: '100px',
        right: 0,
    }} />
);

const RIGHT_ARM = (
    <div style={{
        width: '90px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '130px',
        right: '-90px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }} />
);

const LEFT_ARM = (
    <div style={{
        width: '90px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '130px',
        right: '10px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }} />
);

const RIGHT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '190px',
        right: '-90px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }} />
);

const LEFT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '190px',
        right: 0,
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }} />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type DrawingProps = {
    numberOfGuesses : number,
}

export function Drawing({ numberOfGuesses }: DrawingProps) {
 
    return <section style={{ position: 'relative' }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}

        <div style={{height: '30px', width: '10px', background: 'black', position: 'absolute', top: 0, right: 0}} />
        <div style={{height: '10px', width: '200px', background: 'black', marginLeft: '120px'}} />
        <div style={{height: '300px', width: '10px', background: 'black', marginLeft: '120px'}} />
        <div style={{height:'10px', width: '250px', background: 'black'}}/>
    </section>
}