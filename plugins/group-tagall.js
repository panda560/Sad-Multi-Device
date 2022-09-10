let handler = async(m, { conn, text, participants }) => {

  let teks = `✾PRATAMA - MD✾ ${text ? text : ' '}\n\n╔─── ᚛۞ 𝐓𝐀𝐆 𝐀𝐋𝐋 ۞᚜ ───╗\n`

		      	for (let mem of participants) {

		            teks += `╠➣@${mem.id.split('@')[0]}\n`

				}

                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )

}

handler.help = ['tagall <pesan>']

handler.tags = ['group']

handler.command = /^(tagall)$/i

handler.group = true

handler.admin = true

export default handler
