document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchPegawai');
    if (!searchInput) return;

    const rows = document.querySelectorAll('tbody tr');
    let popupShown = false;

    searchInput.addEventListener('keyup', function () {
        const keyword = this.value.toLowerCase().trim();
        let found = false;

        rows.forEach(row => {
            const nama = row.dataset.nama;
            const nip = row.dataset.nip;

            if (!keyword || nama.includes(keyword) || nip.includes(keyword)) {
                row.style.display = '';
                found = true;
            } else {
                row.style.display = 'none';
            }
        });

        if (keyword !== '' && !found && !popupShown) {
            popupShown = true;

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                iconColor: '#fd2800',
                title: 'Pegawai tidak ditemukan',
                text: 'Nama / NIP pegawai tidak ada',
                showConfirmButton: false,
                timer: 2500,
                background: '#171717',
                color: '#ffffff'
            });
        }

        if (found) popupShown = false;
    });
});