import create from 'zustand'

const useStore = create((set) => {
  return {
    currentPoint: '0',
    points: {
      0: {
        cameraPosition: [-10, 10, 150],
        cameraRotation: [0, 0, 0]
      }
    },
    rhino: null,
    changeCurrentPoint: (newPoint) => set(state => ({ ...state, currentPoint: newPoint })),
    addPoint: (name, point) => set(state => ({ ...state, points: { ...state.points, [name]: point } })),
    setRhino: (rhinoRef) => set(state => ({ ...state, rhino: rhinoRef }))
  }
})

export default useStore
