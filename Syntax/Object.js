var member = ['egoing', 'k123', 'hhe'];
console.log(member[1]); // k123
var i=0;
while(i < member.length) {
    console.log('array',member[i]);
    i++;
}

var role = {'programmer':'egoing',
            'designer':'k123',
            'manager':'hhe'
}
console.log(role.programmer);

for(var n in role) {
    console.log('object',n, 'value =>', role[n]);
}