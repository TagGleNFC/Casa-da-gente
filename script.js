// Initialize Lucide icons
lucide.createIcons();

// Funções de links externos (sem alteração)
function openWhatsApp() { window.open('https://wa.me/552126834950?text=Olá! Gostaria de fazer um pedido', '_blank'); }
function openInstagram() { window.open('https://www.instagram.com/hamburgueriacasadagente/', '_blank'); }
function openIfood() { window.open('https://www.ifood.com.br/delivery/paracambi-rj/casa-da-gente-hamburgueria-lages/48129283-1cbb-49d8-89c1-d9f00cafbefa?utm_medium=share', '_blank'); }
function openMenu() { window.open('cardapio.pdf', '_blank'); }
function openGoogleReview() { window.open('https://search.google.com/local/writereview?placeid=ChIJVVWZfXNOmQARwtMLx-gIEXk', '_blank'); }
function downloadContact() {
    const vcfContent = `BEGIN:VCARD\nVERSION:3.0\nFN:Casa da Gente Hamburgueria\nORG:Casa da Gente Hamburgueria\nTEL:+552126834950\nEMAIL:casadagente@gmail.com\nURL:http://www.hamburgueriacasadagente.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAaexLJ2GeIY1qBOHLg7xeon_pVCWKznn-qbcSiJ2zqpGdOmEZnBFOB8Ono_CfQ_aem_lP9YWC-jWDSnlPdjqpfMxQ\nEND:VCARD`;
    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'burger-house-contato.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Funções do Modal PIX (sem alteração)
function openPixModal() {
    document.getElementById('pixModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closePixModal() {
    document.getElementById('pixModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
window.onclick = function(event) {
    const modal = document.getElementById('pixModal');
    if (event.target === modal) {
        closePixModal();
    }
}
function copyPixKey() {
    const pixKey = document.getElementById('pixKey').textContent;
    const successMsg = document.getElementById('copySuccess');
    navigator.clipboard.writeText(pixKey).then(() => {
        successMsg.style.display = 'block';
        setTimeout(() => { successMsg.style.display = 'none'; }, 3000);
    });
}

// Carrossel (sem alteração)
const carousel = document.querySelector('.carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', () => carousel.style.animationPlayState = 'paused');
    carousel.addEventListener('mouseleave', () => carousel.style.animationPlayState = 'running');
}

// ===============================================
// FUNÇÃO DE COPIAR SENHA WIFI - ATUALIZADA        
// ===============================================
function copyWifiPassword() {
    const password = 'senha2025'; // A senha está definida aqui
    const successMsg = document.getElementById('wifi-copy-success'); // <- ID ATUALIZADO
    
    // Usa a API de Clipboard moderna
    navigator.clipboard.writeText(password).then(() => {
        // Mostra a mensagem de sucesso
        successMsg.style.display = 'block';
        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    }).catch(err => {
        console.error('Falha ao copiar a senha: ', err);
        // Fallback para navegadores antigos (menos comum hoje em dia)
        try {
            const textArea = document.createElement('textarea');
            textArea.value = password;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
        } catch (fallbackErr) {
            console.error('Falha no método de fallback: ', fallbackErr);
        }
    });
}