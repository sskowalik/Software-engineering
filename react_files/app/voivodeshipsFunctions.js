export const getDistrictsForVoivodeship = (voivodeship, voivodeshipData) => {
    return Object.keys(voivodeshipData[voivodeship] || {});
};
  
export const getCommunesForDistrict = (voivodeship, district, voivodeshipData) => {
    return voivodeshipData[voivodeship]?.[district] || [];
};
  
export const handleVoivodeshipChange = (itemValue, setVoivodeship, setDistrict, setCommune) => {
    setVoivodeship(itemValue);
    setDistrict(null);
    setCommune(null);
};
  
export const handleDistrictChange = (itemValue, setDistrict, setCommune) => {
    setDistrict(itemValue);
    setCommune(null);
};