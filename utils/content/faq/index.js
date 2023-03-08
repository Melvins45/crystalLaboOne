const content = (page) => {
  return require(`./${page}`).default
}

export default content