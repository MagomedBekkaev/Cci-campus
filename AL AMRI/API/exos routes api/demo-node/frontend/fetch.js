// async function afficherFactures() {
//     try {
//       const response = await fetch('http://localhost:3000/api/invoices');
  
//       if (!response.ok) {
//         throw new Error('Échec de la récupération des factures');
//       }
  
//       const data = await response.json();
//       console.log('Factures récupérées :', data);
//     } catch (error) {
//       console.log('Erreur :', error.message);
//     } finally {
//       console.log('Opération terminée.');
//     }
//   }

// document.addEventListener('DOMContentLoaded', async () => { 
//     await afficherFactures();
// });

// // ===========================================

// async function ajouterFacture(facture) {
//     try {
//       const response = await fetch('http://localhost:3000/api/invoices', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(facture)
//       });
  
//       if (!response.ok) {
//         throw new Error('Échec de l\'ajout de la facture');
//       }
  
//       const data = await response.json();
//       console.log('Facture ajoutée :', data);
//     } catch (error) {
//       console.log('Erreur :', error.message);
//     } finally {
//       console.log('Opération terminée.');
//     }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     await ajouterFacture({
//         number: 12345,
//         title : 'Facture 12345',
//         amount: 1000,
//         dueDate: '2021-12-31',
//         paid: false,
//         createdAt : new Date(),
//         updatedAt : new Date(),
//         clientId : 2

//     })
// })

// ===========================================

// async function modifierFacture(id, facture) {
//     try {
//       const response = await fetch(`http://localhost:3000/api/invoices/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(facture)
//       });
  
//       if (!response.ok) {
//         throw new Error('Échec de la modification de la facture');
//       }
  
//       const data = await response.json();
//       console.log('Facture modifiée :', data);
//     } catch (error) {
//       console.log('Erreur :', error.message);
//     } finally {
//       console.log('Opération terminée.');
//     }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     await modifierFacture(1, {
//         paid: true,
//         amount: 1500
//     })
// })


// ===========================================

async function supprimerFacture(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/invoices/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Échec de la suppression de la facture');
    }

    console.log('Facture supprimée');
  } catch (error) {
    console.log('Erreur :', error.message);
  } finally {
    console.log('Opération terminée.');
  }
}

// document.addEventListener('DOMContentLoaded', async () => {
//     await supprimerFacture(1)
// })