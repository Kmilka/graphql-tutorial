function user (parent, args, context) {
    return context.prisma.vote.findOne({ where: { id: parent.id } }).user()
}

function link (parent, args, context) {
    return context.prisma.vote.findOne({ where: { id: parent.id } }).link()
}

module.exports = {
    user,
    link,
}