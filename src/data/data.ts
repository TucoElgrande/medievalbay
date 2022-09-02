export interface Product {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}
const mockData: Product[] = [
    {
        id: "1",
        title: "Trebutchet",
        price: 339000,
        imageUrl:
            "https://lh3.googleusercontent.com/yhXAq8T51mbdfCHxYGoaydEVmKfjSFG2BLSunpWxLzXhsehqO-ulo0B5awY2-sauL8Ko-eaB-TWDTFB8KKVD7SNNQZm_VXgQpXXhN4ZfVuYTwoL_KlnK5YDGW4XDXLt5ViWxnD71YLrXNWLg9j8xFUkTesK4PXEBYEX5OKUpQVfS77H1X2hkjq8DEiAMuCNTrZS3_uK0AYoF3taZXuXB-aTwMZOJObj3rHE_yA2fRju_0IyVxbReMJmyRlxaVfq5eds0VRnRH96_ohjSN07WbXLc1RGGgjOv1k9ICx18X0OLYLqFwcurSC_jrPZwxri7zZhktOYCQfpq9ycyHF_ahWNpX9rahvm-Fi8k0hqQLMv9q5Saroskdo_MQHVWzJ_DSCiP19c7XuRHjzBSkJ5lHQvxetbzvtiWXXX8VW2ps2urIanLXoZsSrg_EUu7dxJKfZm3MW3e2GVtq13U5jPJYgGzc9Ae0vNXPM1HvKb-Z_5Zf0Ae6z-AvxSf8B8iGS-WVzkR3gyvMtheCCCyjyXeUS8Q1M-ud15ifO-FXneN7Ew7Zwj9mKu7rzAVVT22C8_DxEru5wH9vrtzkiCQJh31IM03SOt9Ue6Sb_QKy0NyIF3_A5sOZfPr-uEqWk69Vz8nALk-kCpR62N9bxtTEdDCVH-o_W1su_ipi6m67MyORU1T_AeihqoTVNs_IYEVzRQoavLss81F3cPLpHn9XWwNwg5XqboZZBAtKoAJJqlAp44D5GhWXQZe4Kih-3Y=w600-h408-no?authuser=0",
    },
    {
        id: "2",
        title: "Bastard Sword",
        price: 3750,
        imageUrl:
            "https://lh3.googleusercontent.com/dzEBnqJ46SeopHbNeEudhUTV5IMtbo5oOmYTQnXXiVL2AYCOSZa8YTAWcrmtBY6Cf9acTHDem7hNXxjMkXnGrqvGOEVOkJieH6CY5dwdGdbftbciwwPuO8mnQE0_zakO4s4A5uVH6kl4V0R6zj3DvySAyQraJ9fkvi5pcapbQhFNHC4B6if2dsqbWdQZXYu3etZO9Jz-is-30tQBjKBn6WNK2m3Yt9kMzCGGf7f0FHlkguLi8iRmxTdyN3CBnyt2drrZjoAZpcPEHPPs6tXgySZhoHkt_Cnf7RCj5s8U0BQgpbtS1Um16A7ytaT3_BAaSIZysLm4kHRhV57aqfBj8roLqy0xtF0gYqOJ_YLpGE87lSUjzwPiaEfD6kqu8Cpdo3rFarY-1Vwt9RAolPDd4zUhVpRowDCA2YRcBZHVb54ITE15tMu1AfAXlksg3QN9HJROzf8dY6HQnIkN9Ika2ZsZJelZ92fGRnws4a0GI2LnBSRmYjUSoP_J0XAceFfQyDkjBSMMmyBg2MD2J0KueKiTTFdJKywSOVaqvh2dctInUdcHwHDhSku5V2jPZ_Yy8VMxY_f9ioC3rRFpEoEqNE1TLRGl85D8Xh7epvEYdBbsWzhSp7_bzv9aIEH8UguhZTMEe4O401y8VrXe4fL6U1IrC2FskSCcz6FTIGp4o5up1-MbksHZHro1NUjfap38k9vvy9dQvYEesr27PjDAIP8EAHYkLn5NUujlzOsWzcQNKLi1pEc56RgUJC0=w481-h483-no?authuser=0",
    },
    {
        id: "3",
        title: "Kabuto Helmet",
        price: 9001,
        imageUrl:
            "https://lh3.googleusercontent.com/QwCUGBwNiWECyYS7WO6OgwyxviBR1vuGeYPaEnEbPWkRWi1ZJ9tsGJTZKGMmj2F3MBY4TMXkykxBq7rnrOeAdJTM3HcmB7y_NwU29nY24w3NdaWOSlLMQ7TtY9h53zFE4T8nX5omgXC9_iazSK-vaIcoONLkJoSlKoMfMoFwj9KvlBYO5hPkP5UYRMY74WvJxdktsCF240B6wXFHqa2kndRd-6Vb5QfWZJOHubu1KvLDWm7pazJXwl0kwrw6t4985fvE2UGvtx5ra2UMvVCMVdAtd_BSROIGKqyTIuvjbjCiQzTjPwT1sPk-oZjOf_AT5ZWmwByabrXdY41RsNEf-SNdhLsl1bKGEuLc-yYBBFp90V3jqdN0SSDU1hsZ8L7IH_R-oHunyYZ3FSCSGUDsM44gL2cpFQC-2bKBMscIXqU3dGNAIFUoxS-kgfgXrSJ5Le8cTQmNw1RGBwfccHMiKRkX9zbZCtQOCDhxYdy0AHAQYPUBt_9TpUJwlR40Ik7NIcfADy8SC9ler01FRzgtRZ_wC5Y7Rnr2wSlRFVqBcIxFMDXT1mcNSr_l8DKSSFUTc6um-N9y_SG7Vfa8iTliprwnmpTSDxP1_w6ulfNw3OaigSZYg0ILNw7278LQgSLw5YWrStHfR2eYZ6g5nEfot_zcG3NAKfsIVkhIPXq-grg1RR-OocLHcziZBOYe9lXDJfM5KUqSZEQINicz-02CrHjbnbXMLiTdilU9lloiX_4gPucMmc7uZT3Ziaw=s921-no?authuser=0",
    },
];

export default mockData;
