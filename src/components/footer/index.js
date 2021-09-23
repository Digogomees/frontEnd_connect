import React from 'react';

import './style.css'

function Footer(){

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

      const be = "https://www.behance.net/somosconnect"
      const inst = "https://www.instagram.com/agencia.connect/"
      const face = "https://www.facebook.com/connectbe"

    return(
        <footer>
            <div className="container">
                <div className="contentFooter">

                <svg width="121" height="173" viewBox="0 0 121 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M6.02293 56.1794C5.95526 47.6612 7.64709 39.4811 11.5045 31.7742C19.4223 15.8195 32.0772 5.67881 49.4692 1.41972C52.8529 0.60847 56.3043 -0.067575 59.8233 2.95262e-05C62.2595 0.0676341 64.6281 0.270448 66.7936 1.55493C70.7864 3.92109 73.1549 7.43653 73.1549 12.1012C73.1549 16.8336 71.1924 20.5518 66.9966 22.9856C65.3048 23.9996 63.41 24.2701 61.4474 24.4729C57.7931 24.8109 54.2064 25.3517 50.8227 26.7714C40.7394 31.0305 34.4457 38.6022 32.2125 49.2161C29.5056 61.9258 33.972 72.1341 43.8524 80.179C47.6421 83.2212 51.9732 85.1817 56.778 86.0606C63.2069 87.1423 69.3652 86.2634 75.1174 83.2888C83.915 78.8269 89.5995 71.796 91.8328 62.1962C92.3065 60.1005 92.4418 57.8695 92.6449 55.7062C92.7802 53.8808 92.0358 52.3259 90.4116 51.3795C88.6521 50.433 86.8249 50.3654 85.0654 51.3119C83.712 52.0555 83.1706 53.34 83.0352 54.7597C82.8999 56.0442 82.8322 57.3287 82.6969 58.5456C81.2757 69.8355 71.7338 77.6776 60.3647 77.0692C51.2287 76.5284 42.9726 69.3623 41.1454 60.3709C38.7092 49.3513 45.8825 38.2642 56.981 35.6952C58.8758 35.2896 60.7707 35.0868 62.7332 35.4924C64.0867 35.7628 64.9664 36.6417 65.1695 38.0614C65.2371 38.6698 65.2371 39.2783 65.1018 39.8191C64.8311 41.3064 63.7483 42.1853 62.1242 42.3205C59.9586 42.5233 57.8607 42.9289 55.8305 43.8078C50.146 46.1739 44.7321 55.0977 49.943 63.1427C51.9732 66.2525 54.4771 68.6186 58.1991 69.4975C66.3199 71.5932 74.2377 66.2525 75.3205 58.0047C75.5235 56.3146 75.5912 54.6245 75.9295 53.002C76.8093 48.6077 79.5839 45.7007 83.6443 44.1458C89.2612 41.9148 95.8255 44.6866 98.5324 50.433C99.2768 51.9879 99.6829 53.6104 99.6829 55.3681C100.292 73.0805 87.5017 89.3056 70.3803 93.0239C56.5749 95.9985 44.6644 92.3478 34.7841 82.2071C29.5056 76.7312 25.9866 70.3764 24.7008 62.8046C21.7232 45.2275 29.9793 29.746 44.123 22.0391C48.1158 19.8758 52.3792 18.5913 56.8456 17.9828C58.5375 17.78 60.2293 17.5772 61.9211 17.3744C64.3574 17.0364 66.1169 15.0082 66.1169 12.6421C66.1846 10.1407 64.6281 8.11257 62.1918 7.77455C60.9737 7.57174 59.6879 7.63934 58.4698 7.70695C53.3266 7.97736 48.3865 8.99143 43.5817 10.952C37.4911 13.4533 32.2125 17.1716 27.6107 21.8363C21.7908 27.3799 17.5951 34.0727 15.2942 41.9148C13.67 47.526 13.1286 53.2724 13.3317 59.0864C14.2114 78.0157 26.7987 93.0239 39.5889 99.5139C44.9351 102.218 50.552 103.841 56.5073 104.517C70.854 106.072 83.1029 101.474 93.7276 92.0774C101.51 85.1817 106.247 76.3932 108.548 66.3201C109.225 63.4807 109.36 60.5737 109.631 57.7343C109.699 56.8554 109.766 55.9766 109.969 55.1653C110.375 53.4752 111.458 52.5964 113.218 52.664C115.045 52.7316 116.398 53.678 116.669 55.3681C116.804 56.1118 116.804 56.923 116.737 57.7343C116.263 78.8269 104.217 95.1196 90.75 103.638C84.1857 107.829 77.0123 110.398 69.2975 111.548C66.3199 112.021 63.3423 112.291 60.3647 112.156C47.5067 111.75 36.0699 107.491 26.1896 99.2435C16.3093 90.9957 10.0833 80.517 7.17338 68.0778C6.3613 64.1567 5.95526 60.2357 6.02293 56.1794Z" fill="#BB0049"/>
                <path d="M4.3311 154.612C2.97763 153.868 1.89485 152.854 1.15045 151.569C0.40604 150.285 0 148.798 0 147.175C0 145.553 0.40604 144.065 1.15045 142.781C1.89485 141.496 2.97763 140.482 4.3311 139.739C5.68456 138.995 7.17338 138.657 8.86521 138.657C10.2187 138.657 11.4368 138.86 12.5872 139.333C13.7377 139.806 14.6851 140.482 15.4295 141.361L13.467 143.254C12.2489 141.97 10.7601 141.294 9.06823 141.294C7.91779 141.294 6.90268 141.564 6.02293 142.037C5.14318 142.51 4.39877 143.254 3.92506 144.133C3.45134 145.012 3.18065 146.026 3.18065 147.108C3.18065 148.257 3.45134 149.203 3.92506 150.082C4.39877 150.961 5.14318 151.637 6.02293 152.178C6.90268 152.651 7.91779 152.922 9.06823 152.922C10.8277 152.922 12.3166 152.245 13.467 150.961L15.4295 152.854C14.6851 153.733 13.7377 154.409 12.5872 154.882C11.4368 155.355 10.2187 155.558 8.86521 155.558C7.17338 155.761 5.68456 155.355 4.3311 154.612Z" fill="white"/>
                <path d="M21.1818 154.612C19.8283 153.868 18.7455 152.854 18.0011 151.569C17.2567 150.285 16.8507 148.798 16.8507 147.175C16.8507 145.553 17.2567 144.133 18.0011 142.781C18.7455 141.496 19.8283 140.482 21.1818 139.739C22.5352 138.995 24.0917 138.657 25.7159 138.657C27.4077 138.657 28.8965 138.995 30.25 139.739C31.6035 140.482 32.6862 141.496 33.4307 142.781C34.1751 144.065 34.5811 145.553 34.5811 147.175C34.5811 148.798 34.1751 150.285 33.4307 151.569C32.6862 152.854 31.6035 153.868 30.25 154.612C28.8965 155.355 27.34 155.693 25.7159 155.693C24.0917 155.761 22.5352 155.355 21.1818 154.612ZM28.7612 152.313C29.6409 151.84 30.3177 151.096 30.8591 150.217C31.3328 149.338 31.6035 148.324 31.6035 147.243C31.6035 146.161 31.3328 145.147 30.8591 144.268C30.3854 143.389 29.6409 142.713 28.7612 142.172C27.8814 141.699 26.8663 141.429 25.7836 141.429C24.7008 141.429 23.6857 141.699 22.8059 142.172C21.9262 142.646 21.2494 143.389 20.7081 144.268C20.2343 145.147 19.9637 146.161 19.9637 147.243C19.9637 148.324 20.2343 149.338 20.7081 150.217C21.1818 151.096 21.9262 151.772 22.8059 152.313C23.6857 152.786 24.7008 153.057 25.7836 153.057C26.8663 153.057 27.8814 152.786 28.7612 152.313Z" fill="white"/>
                <path d="M52.6499 138.927V155.491H50.146L41.0101 144.268V155.491H37.9648V138.927H40.4687L49.6046 150.15V138.927H52.6499Z" fill="white"/>
                <path d="M71.8015 138.927V155.491H69.2975L60.1616 144.268V155.491H57.1163V138.927H59.6202L68.7562 150.15V138.927H71.8015Z" fill="white"/>
                <path d="M88.7198 152.922V155.491H76.2679V138.927H88.3814V141.496H79.3809V145.823H87.3663V148.325H79.3809V152.854H88.7198V152.922Z" fill="white"/>
                <path d="M95.2164 154.612C93.863 153.868 92.7802 152.854 92.0358 151.569C91.2914 150.285 90.8853 148.798 90.8853 147.175C90.8853 145.553 91.2914 144.065 92.0358 142.781C92.7802 141.496 93.863 140.482 95.2164 139.739C96.5699 138.995 98.0587 138.657 99.7506 138.657C101.104 138.657 102.322 138.86 103.473 139.333C104.623 139.806 105.57 140.482 106.315 141.361L104.352 143.254C103.134 141.97 101.713 141.294 99.9536 141.294C98.8031 141.294 97.788 141.564 96.9083 142.037C96.0285 142.51 95.2841 143.254 94.8104 144.133C94.3367 145.012 94.066 146.026 94.066 147.108C94.066 148.257 94.3367 149.203 94.8104 150.082C95.2841 150.961 96.0285 151.637 96.9083 152.178C97.788 152.651 98.8031 152.922 99.9536 152.922C101.713 152.922 103.202 152.245 104.352 150.961L106.315 152.854C105.57 153.733 104.623 154.409 103.473 154.882C102.322 155.355 101.104 155.558 99.7506 155.558C98.0587 155.761 96.5022 155.355 95.2164 154.612Z" fill="white"/>
                <path d="M112.405 141.564H106.924V138.995H121V141.564H115.518V155.491H112.473V141.564H112.405Z" fill="white"/>
                <path d="M39.7243 169.688H36.2729L35.5285 171.378H35.0548L37.7617 165.428H38.1678L40.8747 171.378H40.401L39.7243 169.688ZM39.5889 169.282L38.0324 165.834L36.476 169.282H39.5889Z" fill="white"/>
                <path d="M48.7925 166.916V170.837C48.7925 171.58 48.5895 172.121 48.2511 172.459C47.9128 172.797 47.3714 173 46.627 173C46.2209 173 45.8149 172.933 45.4765 172.797C45.1381 172.662 44.7998 172.527 44.5968 172.257L44.7998 171.919C45.0028 172.121 45.2735 172.257 45.6119 172.392C45.9502 172.527 46.2209 172.595 46.627 172.595C47.236 172.595 47.6421 172.459 47.9128 172.189C48.1834 171.919 48.3188 171.445 48.3188 170.904V170.161C48.1158 170.499 47.9128 170.702 47.5744 170.904C47.236 171.107 46.8976 171.175 46.4916 171.175C46.0856 171.175 45.6795 171.107 45.3412 170.904C45.0028 170.702 44.7321 170.431 44.5291 170.161C44.3261 169.823 44.2584 169.485 44.2584 169.079C44.2584 168.673 44.3261 168.268 44.5291 167.997C44.7321 167.659 45.0028 167.389 45.3412 167.254C45.6795 167.119 46.0856 166.983 46.4916 166.983C46.8976 166.983 47.236 167.051 47.5744 167.254C47.9128 167.457 48.1834 167.659 48.3188 167.997V166.983H48.7925V166.916ZM47.439 170.566C47.7097 170.431 47.9128 170.228 48.1158 169.958C48.2511 169.688 48.3188 169.35 48.3188 169.012C48.3188 168.673 48.2511 168.335 48.1158 168.065C47.9804 167.795 47.7774 167.592 47.439 167.457C47.1007 167.321 46.83 167.254 46.4916 167.254C46.1532 167.254 45.8149 167.321 45.5442 167.457C45.2735 167.592 45.0705 167.795 44.8675 168.065C44.6644 168.335 44.6644 168.606 44.6644 169.012C44.6644 169.417 44.7321 169.688 44.8675 169.958C45.0028 170.228 45.2058 170.431 45.5442 170.566C45.8149 170.702 46.1532 170.769 46.4916 170.769C46.8976 170.769 47.1683 170.702 47.439 170.566Z" fill="white"/>
                <path d="M57.184 169.214H53.3943C53.3943 169.552 53.462 169.89 53.665 170.161C53.8003 170.431 54.071 170.634 54.3417 170.769C54.6124 170.904 54.9508 170.972 55.2892 170.972C55.5599 170.972 55.8305 170.904 56.1012 170.837C56.3719 170.769 56.575 170.566 56.7103 170.364L56.981 170.634C56.778 170.837 56.575 171.04 56.2366 171.175C55.8982 171.31 55.6275 171.378 55.2892 171.378C54.8154 171.378 54.4771 171.31 54.1387 171.107C53.8003 170.904 53.5297 170.634 53.3266 170.296C53.1236 169.958 53.0559 169.552 53.0559 169.147C53.0559 168.741 53.1236 168.335 53.3266 167.997C53.5297 167.659 53.7327 167.389 54.071 167.186C54.4094 166.983 54.7478 166.916 55.1538 166.916C55.5599 166.916 55.8982 166.983 56.2366 167.186C56.575 167.389 56.778 167.659 56.981 167.997C57.184 168.335 57.2517 168.741 57.2517 169.147L57.184 169.214ZM54.2741 167.457C54.0034 167.592 53.8003 167.795 53.665 168.065C53.5297 168.335 53.462 168.606 53.3943 168.944H56.778C56.778 168.606 56.6426 168.335 56.5073 168.065C56.3719 167.795 56.1689 167.592 55.8982 167.457C55.6275 167.321 55.3568 167.254 55.0861 167.254C54.7478 167.254 54.4771 167.321 54.2741 167.457ZM55.9659 166.172L55.0861 165.428L54.2064 166.172H53.8003L54.8831 165.158H55.3568L56.4396 166.172H55.9659Z" fill="white"/>
                <path d="M64.8988 167.389C65.2372 167.727 65.3725 168.2 65.3725 168.809V171.378H64.9665V168.809C64.9665 168.335 64.8311 167.93 64.5604 167.659C64.2897 167.389 63.9514 167.254 63.4776 167.254C62.9363 167.254 62.5302 167.389 62.2595 167.727C61.9888 168.065 61.7858 168.471 61.7858 169.012V171.378H61.3798V166.983H61.7858V167.93C61.9212 167.592 62.1918 167.389 62.4625 167.186C62.7332 166.983 63.1393 166.916 63.5453 166.916C64.0867 166.916 64.5604 167.051 64.8988 167.389Z" fill="white"/>
                <path d="M70.5833 171.107C70.245 170.904 69.9743 170.634 69.7712 170.296C69.5682 169.958 69.5005 169.552 69.5005 169.147C69.5005 168.741 69.5682 168.335 69.7712 167.997C69.9743 167.659 70.245 167.389 70.5833 167.186C70.9217 166.983 71.3277 166.916 71.7338 166.916C72.0721 166.916 72.4105 166.983 72.6812 167.119C72.9519 167.254 73.2226 167.457 73.3579 167.727L73.0196 167.93C72.8842 167.727 72.6812 167.524 72.4105 167.457C72.2075 167.321 71.9368 167.321 71.6661 167.321C71.3277 167.321 70.9894 167.389 70.7187 167.524C70.448 167.659 70.245 167.93 70.0419 168.2C69.9066 168.471 69.8389 168.809 69.8389 169.147C69.8389 169.485 69.9066 169.823 70.0419 170.093C70.1773 170.364 70.3803 170.566 70.7187 170.769C70.9894 170.904 71.3277 170.972 71.6661 170.972C71.9368 170.972 72.2075 170.904 72.4105 170.837C72.6135 170.702 72.8165 170.566 73.0196 170.364L73.3579 170.566C73.1549 170.837 72.9519 171.04 72.6812 171.175C72.4105 171.31 72.0721 171.378 71.7338 171.378C71.3277 171.378 70.9217 171.31 70.5833 171.107Z" fill="white"/>
                <path d="M77.5537 165.766C77.486 165.699 77.4183 165.631 77.4183 165.496C77.4183 165.428 77.4183 165.293 77.5537 165.226C77.689 165.158 77.689 165.09 77.8244 165.09C77.892 165.09 78.0274 165.09 78.0951 165.158C78.1627 165.226 78.2304 165.293 78.2304 165.428C78.2304 165.496 78.2304 165.631 78.0951 165.699C77.9597 165.766 77.9597 165.834 77.8244 165.834C77.689 165.834 77.6214 165.834 77.5537 165.766ZM77.6214 166.916H78.0274V171.31H77.6214V166.916Z" fill="white"/>
                <path d="M85.4715 167.321C85.7422 167.592 85.9452 167.997 85.9452 168.538V171.378H85.5392V170.566C85.4038 170.837 85.2008 171.04 84.9301 171.175C84.6594 171.31 84.321 171.378 83.9827 171.378C83.5089 171.378 83.1029 171.242 82.8322 171.04C82.5615 170.837 82.4262 170.499 82.4262 170.093C82.4262 169.755 82.5615 169.417 82.8322 169.214C83.1029 169.011 83.509 168.876 84.118 168.876H85.6068V168.538C85.6068 168.133 85.4715 167.795 85.2685 167.592C85.0654 167.389 84.7271 167.254 84.321 167.254C84.0503 167.254 83.712 167.321 83.509 167.389C83.2383 167.524 83.0352 167.659 82.8322 167.795L82.6292 167.457C82.8322 167.254 83.1029 167.119 83.4413 166.983C83.7796 166.848 84.0503 166.848 84.3887 166.848C84.7271 166.916 85.1331 167.051 85.4715 167.321ZM84.8624 170.769C85.1331 170.566 85.3361 170.364 85.4715 170.026V169.214H83.9827C83.5766 169.214 83.2383 169.282 83.0352 169.485C82.8322 169.62 82.7645 169.89 82.7645 170.161C82.7645 170.431 82.8999 170.702 83.1029 170.837C83.3059 170.972 83.6443 171.107 83.9827 171.107C84.321 171.04 84.6594 170.972 84.8624 170.769Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="121" height="173" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                    <div className="social">
                        <div className="social_media">
                            <a target="_blank" href={inst}><i class='bx bxl-instagram'></i></a>
                            <a target="_blank" href={face}><i class='bx bxl-facebook-square' ></i></a>
                            <a target="_blank" href={be}><i class='bx bxl-behance' ></i></a>
                        </div>
                        <span> @{getCurrentYear()} - Copyright</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;