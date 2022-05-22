
function reducer(preState = { musics: [], isOpen: false, nowId: 0, isOpenlyric: false }, action) {
  const { details, payload, isOpen, nowId, deleteId, isOpenlyric, audio,searchResult,musics } = action;
  switch (action.type) {
    case 'sheetdetails':
      return { ...preState, ...details };
    case 'music':
      preState.musics.push(payload)
      return Object.assign(preState, { musics: dedupe(preState.musics), nowId })
    case 'musics':
      preState.musics = musics
      return {...preState,nowId}
    case 'isOpen':
      return { ...preState, isOpen };
    case 'isOpenlyric':
      return { ...preState, isOpenlyric };
    case 'nowId':
      return { ...preState, nowId };
    case 'delete':
      let newMusic = preState.musics.filter((item) => item.id !== deleteId)
      if (deleteId === preState.nowId) {
        let newId = newMusic[newMusic.length - 1] ? newMusic[newMusic.length - 1].id : 0;
        return Object.assign(preState, { musics: newMusic, nowId: newId });
      }
      return Object.assign(preState, { musics: newMusic });
    case 'audio':
      return { ...preState, audio }
    case 'deleteAll':
      preState.musics = []
      return { ...preState }
    case "searchResult":
      return {...preState,searchResult}
    default:
      return preState
  }
}

// 去重
function dedupe(arr) {
  let hash = {}
  return arr.reduce((res, item) => {
    if (hash[item.id] !== 1) {
      hash[item.id] = 1
      res.push(item)
    }
    return res
  }, []);
}

export default reducer