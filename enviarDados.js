import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (evento) => {
  // Impede que a página recarregue ao clicar no botão
  evento.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const trope = document.getElementById("trope").value.trim();
  const resenha = document.getElementById("resenha").value.trim();

  if (!titulo || !autor || !trope || !resenha) {
    alert("Preencha todos os campos.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "livros"), {
      titulo,
      autor,
      trope,
      resenha,
      criadoEm: serverTimestamp()
    });

    console.log("Documento criado no Firestore com ID:", docRef.id);
    alert("Livro cadastrado com sucesso no TropeBooks!");
    form.reset();
  } catch (erro) {
    console.error("Erro ao enviar dados para o Firestore:", erro);
    alert("Erro ao salvar no banco de dados. Abra a janela Inspecionar > Console para verificar as permissões.");
  }
});