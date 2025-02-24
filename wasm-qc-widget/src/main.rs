use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn quantum_superposition() -> String {
    let states = ["|0⟩", "|1⟩", "|+⟩", "|-⟩"];
    let index = js_sys::Math::floor(js_sys::Math::random() * 4.0) as usize;
    states[index].to_string()
}
