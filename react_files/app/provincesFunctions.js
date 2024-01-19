export const getDistrictsForProvince = (province, provinceData) => {
    return Object.keys(provinceData[province] || {});
};
  
export const getCommunesForDistrict = (province, district, provinceData) => {
    return provinceData[province]?.[district] || [];
};
  
export const handleProvinceChange = (itemValue, setProvince, setDistrict, setCommune) => {
    setProvince(itemValue);
    setDistrict(null);
    setCommune(null);
};
  
export const handleDistrictChange = (itemValue, setDistrict, setCommune) => {
    setDistrict(itemValue);
    setCommune(null);
};