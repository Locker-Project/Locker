import buttonModel from "../Models/ButtonModel";

function activateModel(model: any) {
    return model;
}

function useButtonModel() {
    return buttonModel;
}

export default activateModel;
export { useButtonModel };