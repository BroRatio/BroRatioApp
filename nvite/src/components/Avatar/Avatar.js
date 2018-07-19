import React from 'react'

const styles = {
    display: "inline-block",
    border: "black 1px solid",
    borderRadius: '999px',
    height: '55px',
    width: '55px',
}

export default props => <img style={styles} src={props.children} alt='Nothing found' />