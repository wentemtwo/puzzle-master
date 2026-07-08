// v1.9 - 42个动漫角色，每个来自不同的动漫
const characters = [
    // 简单·动漫 (3×3) - id 115-117
    { id: 115, name: "初音未来", anime: "Vocaloid", search: "Hatsune Miku", difficulty: "easy", grid: 3 },
    { id: 116, name: "哆啦A梦", anime: "哆啦A梦", search: "Doraemon", difficulty: "easy", grid: 3 },
    { id: 117, name: "皮卡丘", anime: "宝可梦", search: "Pikachu", difficulty: "easy", grid: 3 },
    // 中等·动漫 (4×4) - id 118-120
    { id: 118, name: "漩涡鸣人", anime: "火影忍者", search: "Naruto Uzumaki", difficulty: "medium", grid: 4 },
    { id: 119, name: "路飞", anime: "海贼王", search: "Monkey D. Luffy", difficulty: "medium", grid: 4 },
    { id: 120, name: "孙悟空", anime: "龙珠", search: "Son Goku", difficulty: "medium", grid: 4 },
    // 困难·动漫 (5×5) - id 121-123
    { id: 121, name: "艾伦·耶格尔", anime: "进击的巨人", search: "Eren Yeager", difficulty: "hard", grid: 5 },
    { id: 122, name: "五条悟", anime: "咒术回战", search: "Satoru Gojo", difficulty: "hard", grid: 5 },
    { id: 123, name: "琦玉", anime: "一拳超人", search: "Saitama", difficulty: "hard", grid: 5 },
    // 专家·动漫 (6×6) - id 124-126
    { id: 124, name: "炭治郎", anime: "鬼灭之刃", search: "Tanjiro Kamado", difficulty: "expert", grid: 6 },
    { id: 125, name: "艾尔莎", anime: "妖精的尾巴", search: "Erza Scarlet", difficulty: "expert", grid: 6 },
    { id: 126, name: "坂田银时", anime: "银魂", search: "Gintoki Sakata", difficulty: "expert", grid: 6 },
    // 大师·动漫 (7×7) - id 127-129
    { id: 127, name: "夏目贵志", anime: "夏目友人帐", search: "Takashi Natsume", difficulty: "master", grid: 7 },
    { id: 128, name: "杀生丸", anime: "犬夜叉", search: "Sesshomaru", difficulty: "master", grid: 7 },
    { id: 129, name: "鲁路修", anime: "反叛的鲁路修", search: "Lelouch Lamperouge", difficulty: "master", grid: 7 },
    // 传奇·动漫 (8×8) - id 130-132
    { id: 130, name: "碇真嗣", anime: "新世纪福音战士", search: "Shinji Ikari", difficulty: "legendary", grid: 8 },
    { id: 131, name: "金木研", anime: "东京喰种", search: "Ken Kaneki", difficulty: "legendary", grid: 8 },
    { id: 132, name: "夜神月", anime: "死亡笔记", search: "Light Yagami", difficulty: "legendary", grid: 8 },
    // 史诗·动漫 (9×9) - id 133-135
    { id: 133, name: "桐谷和人", anime: "刀剑神域", search: "Kazuto Kirigaya", difficulty: "epic", grid: 9 },
    { id: 134, name: "冈部伦太郎", anime: "命运石之门", search: "Hououin Kyouma", difficulty: "epic", grid: 9 },
    { id: 135, name: "晓美焰", anime: "魔法少女小圆", search: "Homura Akemi", difficulty: "epic", grid: 9 },
    // 神话·动漫 (10×10) - id 136-138
    { id: 136, name: "爱德华", anime: "钢之炼金术师", search: "Edward Elric", difficulty: "mythic", grid: 10 },
    { id: 137, name: "阿尼亚", anime: "间谍过家家", search: "Anya Forger", difficulty: "mythic", grid: 10 },
    { id: 138, name: "四宫辉夜", anime: "辉夜大小姐", search: "Kaguya Shinomiya", difficulty: "mythic", grid: 10 },
    // 至尊·动漫 (11×11) - id 139-141
    { id: 139, name: "樱木花道", anime: "灌篮高手", search: "Hanamichi Sakuragi", difficulty: "supreme", grid: 11 },
    { id: 140, name: "黑崎一护", anime: "死神", search: "Ichigo Kurosaki", difficulty: "supreme", grid: 11 },
    { id: 141, name: "柯南", anime: "名侦探柯南", search: "Conan Edogawa", difficulty: "supreme", grid: 11 },
    // 混沌·动漫 (12×12) - id 142-144
    { id: 142, name: "绿谷出久", anime: "我的英雄学院", search: "Izuku Midoriya", difficulty: "chaos", grid: 12 },
    { id: 143, name: "电次", anime: "电锯人", search: "Denji Chainsaw Man", difficulty: "chaos", grid: 12 },
    { id: 144, name: "日向翔阳", anime: "排球少年", search: "Shoyo Hinata", difficulty: "chaos", grid: 12 },
    // 永恒·动漫 (13×13) - id 145-147
    { id: 145, name: "菜月昴", anime: "Re:从零开始的异世界生活", search: "Subaru Natsuki", difficulty: "eternal", grid: 13 },
    { id: 146, name: "月野兔", anime: "美少女战士", search: "Usagi Tsukino", difficulty: "eternal", grid: 13 },
    { id: 147, name: "亚古兽", anime: "数码宝贝", search: "Agumon", difficulty: "eternal", grid: 13 },
    // 创世·动漫 (14×14) - id 148-150
    { id: 148, name: "阿尔托莉雅", anime: "Fate/stay night", search: "Saber Fate", difficulty: "genesis", grid: 14 },
    { id: 149, name: "越前龙马", anime: "网球王子", search: "Ryoma Echizen", difficulty: "genesis", grid: 14 },
    { id: 150, name: "星野爱", anime: "推子", search: "Ai Hoshino", difficulty: "genesis", grid: 14 },
    // 天命·动漫 (15×15) - id 151-153
    { id: 151, name: "艾玛", anime: "约定的梦幻岛", search: "Emma Yakusoku", difficulty: "destiny", grid: 15 },
    { id: 152, name: "鲁迪乌斯", anime: "无职转生", search: "Rudeus Greyrat", difficulty: "destiny", grid: 15 },
    { id: 153, name: "猫猫", anime: "药屋少女的呢喃", search: "Maomao Apothecary", difficulty: "destiny", grid: 15 },
    // 终极·动漫 (16×16) - id 154-156
    { id: 154, name: "洁世一", anime: "蓝色监狱", search: "Yoichi Isagi", difficulty: "ultimate", grid: 16 },
    { id: 155, name: "栗山未来", anime: "境界的彼方", search: "Mirai Kuriyama", difficulty: "ultimate", grid: 16 },
    { id: 156, name: "阿斯塔", anime: "黑色五叶草", search: "Asta Black Clover", difficulty: "ultimate", grid: 16 }
];

async function fetchCharacter(searchName) {
    const query = `{Character(search:"${searchName}"){id name{full}image{large medium}}}`;
    try {
        const res = await fetch('https://graphql.anilist.co', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });
        const data = await res.json();
        if (data.data && data.data.Character) {
            return {
                anilistName: data.data.Character.name.full,
                image: data.data.Character.image.large,
                thumb: data.data.Character.image.medium
            };
        }
        return null;
    } catch (e) {
        console.error(`Error: ${e.message}`);
        return null;
    }
}

async function main() {
    const results = [];
    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
        process.stdout.write(`[${i+1}/42] ${char.search}...`);
        const data = await fetchCharacter(char.search);
        if (data) {
            results.push({ ...char, ...data });
            console.log(` OK`);
        } else {
            console.log(` FAILED`);
            results.push({ ...char, image: null, thumb: null });
        }
        if (i < characters.length - 1) await new Promise(r => setTimeout(r, 1200));
    }
    
    const fs = require('fs');
    fs.writeFileSync('anime-images.json', JSON.stringify(results, null, 2));
    
    const success = results.filter(r => r.image).length;
    const failed = results.filter(r => !r.image).length;
    console.log(`\nDone! Success: ${success}, Failed: ${failed}`);
    
    if (failed > 0) {
        console.log('\nFailed:');
        results.filter(r => !r.image).forEach(r => console.log(`  id:${r.id} ${r.search}`));
    }
    
    // Output game.js format
    console.log('\n===== game.js LEVELS data =====');
    results.forEach(r => {
        const imgUrl = r.image || `https://picsum.photos/seed/anime${r.id}/600/600`;
        const thumbUrl = r.thumb || `https://picsum.photos/seed/anime${r.id}/200/200`;
        console.log(`    { id: ${r.id}, name: "${r.name}", difficulty: "${r.difficulty}", grid: ${r.grid}, image: "${imgUrl}", thumb: "${thumbUrl}", tag: "动漫" },`);
    });
}

main();