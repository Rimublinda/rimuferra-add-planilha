import * as ListFormatting from "./Formatting.js";
import * as GetApi from "./GetApi.js";
const FormAdd = document.querySelector("#form-add");
const TypeAdd = document.querySelector("#type-add");
const text = document.querySelector("#text");
// area de test
document.querySelector("#link-api").value = "https://api.sheetmonkey.io/form/uqT8GPL2mQX5J6rP5SoGLr";

FormAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    switch (TypeAdd.value) {
        case 'single':
            GetApi.default.GetApi(text.value, 1);
            break;
        
        case 'multiple':
            let TextFormatting = ListFormatting.default(text.value);
            GetApi.default.GetApi(TextFormatting, 2);
            break;    
        default:
            GetApi.default.modAlerta("error", "coloque o formato da lista");
            break;
    }
});