
const HEAD = (
    <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        border: '10px black solid',
        position: 'absolute',
        top: '30px',
        right: '-25px',
    }} />
);

const BODY = (
    <div style={{
        width: '10px',
        height: '90px',
        background: 'black',
        position: 'absolute',
        top: '80px',
        right: 0,
    }} />
);

const RIGHT_ARM = (
    <div style={{
        width: '70px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '110px',
        right: '-70px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }} />
);

const LEFT_ARM = (
    <div style={{
        width: '70px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '110px',
        right: '10px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }} />
);

const RIGHT_LEG = (
    <div style={{
        width: '80px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '160px',
        right: '-70px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }} />
);

const LEFT_LEG = (
    <div style={{
        width: '80px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '160px',
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
        <div style={{height: '10px', width: '150px', background: 'black', marginLeft: '100px'}} />
        <div style={{height: '250px', width: '10px', background: 'black', marginLeft: '100px'}} />
        <div style={{height:'10px', width: '200px', background: 'black'}}/>
    </section>
}