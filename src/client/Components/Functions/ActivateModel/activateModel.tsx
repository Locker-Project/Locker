import buttonModel from "../Models/ButtonModel";
import inputModel from "../Models/inputModel";

function activateModel(model: any) {
    return model;
}

function useButtonModel() {
    return buttonModel;
}

function useInputModel() {
    return inputModel;
}

export default activateModel;
export { useButtonModel, useInputModel };