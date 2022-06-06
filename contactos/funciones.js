const saveContact = (db, contacto)=>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}
const loadcontact = (db) => {
    let claves = Object.keys(db)

}