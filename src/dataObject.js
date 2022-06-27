const data = {
  devices: {
    samsung: [
      {
        id: 564564,
        name: "Samsung Galaxy S8 ",
        codename: "dreamlte",
        kernel_version: "4.14.256",
        last_updated: "june 16,2022",
        developer: "Pointz",
        download_link: "https://github.com/",
      },
      {
        id: 231321,
        name: "Samsung Note 10+",
        codename: "d2s",
        kernel_version: "4.14.223",
        last_updated: "june 16,2022",
        developer: "Pointz",
        download_link: "https://github.com/",
      },
    ],
    xiaomi: [
      {
        id: 564564,
        name: "Xiaomi Mi 10T",
        codename: "apollo",
        kernel_version: "4.14.144",
        last_updated: "May 14,2022",
        developer: "Robin",
        download_link: "https://github.com/",
      },
      {
        id: 114545,
        name: "Xiaomi Mi 3",
        codename: "apollo",
        kernel_version: "4.14.144",
        last_updated: "May 14,2022",
        developer: "Robin",
        download_link: "https://github.com/",
      },
    ],
    redmi: [],
  },
};

const kernel_request = {
  Device_Name: "",
  Device_Codename: "",
  Current_Kernel_Version: "",
  Requested_android_version_support: "",
  kernel_source: "",
};
