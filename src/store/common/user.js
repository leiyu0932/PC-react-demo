import { action, makeAutoObservable } from 'mobx';

// 用户信息
class Store {
  constructor() {
    makeAutoObservable(this);
    const { userInfo = {}, isLogin = false } =
      Reflect.get(window, 'serverData') || {};
    const {
      customerBaseInformation = {},
      corporateInformation = {},
      qualificationAttachment = {},
      moneyDetail = {},
    } = userInfo || {};
    this.userInfo = {
      customerBaseInformation,
      corporateInformation,
      qualificationAttachment,
      moneyDetail,
    };
    this.isLogin = isLogin;
  }
  userInfo = {
    customerBaseInformation: {
      accountLeader: 1,
      createTime: 0,
      cooperativeUser: -1,
      pin: '',
      businessType: -1,
      bindPhone: '',
      bindEmail: '',
      contacts: '',
      mobilePhone: '',
      contactsEmail: '',
      ebsCode: '',
      fixedTelephone: '',
      superiorPin: '',
      superiorPinRelation: '',
      source: 1,
      billStatus: 1,
      accountStatus: 1,
      businessFlag: 0,
      claimant: "",
      claimantPhone: "",
      claimantRealName: ""
    },
    corporateInformation: {
      corporate: '',
      companyName: '',
      companyType: 0,
      certificateType: 0,
      taxpayerType: 0,
      certificateNo: '',
      certificateNoStartTime: 0,
      certificateNoExpirationTime: 0,
      certificateQualified: 0,
      taxpayerIdentificationCode: '',
      businessLicenseStartTime: 0,
      businessLicenseExpirationTime: 0,
      provinceId: 0,
      cityId: 0,
      countyId: 0,
      townId: 0,
      detailAddress: '',
      businessLicenseRegistrationNumber: '',
      organizationCodeExpirationTime: 0,
      businessLicenseBusinessScope: '',
      provinceName: '',
      cityName: '',
      countyName: '',
      townName: '',
      organizationCodeNo: '',
      certificateNoIsLongTerm: 1,
      organizationCodeBusinessIsLongTerm: 1,
      isPerfectFlag: false,
      approveStatus: 1,
    },
    qualificationAttachment: {
      doorHeadPhoto: '',
      businessLicense: '',
      frontPhotoIDCard: '',
      reversePhotoIDCard: '',
      organizationCode: '',
      behindPhotoIDCard: '',
      taxpayerIdentification: '',
      owgReservationOrderDetailFilePath: '',
      owgReservationOrderDetailFileName: '',
    },
    moneyDetail: {
      arrearsMoney: '0',
      violationMoney: '0',
      lastRepaymentTime: 0,
      bookkeepingTime: 0,
    },
  };

  isLogin = false;

  getUserInfo = () => {};
}

const store = new Store();
export default store;
