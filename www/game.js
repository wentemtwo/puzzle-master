// ===== 拼图大师 v2.2 - 游戏核心逻辑 =====

// ===== 关卡数据（96关，8个难度 + 动漫角色专题） =====
const LEVELS = [
    // 3×3 (简单) - 关卡 1-9
    { id: 1, name: "山间湖畔", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=200&h=200&fit=crop" },
    { id: 2, name: "黄金海岸", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop" },
    { id: 3, name: "微笑女性", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" },
    { id: 4, name: "白色建筑", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=200&h=200&fit=crop" },
    { id: 5, name: "雪山湖泊", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=200&h=200&fit=crop" },
    { id: 6, name: "高楼小路", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop" },
    { id: 7, name: "森林湖泊", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=200&h=200&fit=crop" },
    { id: 8, name: "海上飞鸟", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=200&h=200&fit=crop" },
    { id: 9, name: "灰度女性", difficulty: "easy", grid: 3, image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=200&h=200&fit=crop" },

    // 4×4 (中等) - 关卡 10-18
    { id: 10, name: "街道小径", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?w=200&h=200&fit=crop" },
    { id: 11, name: "蓝天海岸", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=200&h=200&fit=crop" },
    { id: 12, name: "Seceda山峰", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=200&h=200&fit=crop" },
    { id: 13, name: "灰色建筑", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=200&h=200&fit=crop" },
    { id: 14, name: "紫花日出", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1563216368-5b6a40648062?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1563216368-5b6a40648062?w=200&h=200&fit=crop" },
    { id: 15, name: "人行横道", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=200&h=200&fit=crop" },
    { id: 16, name: "日落海滩", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=200&h=200&fit=crop" },
    { id: 17, name: "雾中山峰", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=200&h=200&fit=crop" },
    { id: 18, name: "Axel Towers", difficulty: "medium", grid: 4, image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=200&h=200&fit=crop" },

    // 5×5 (困难) - 关卡 19-27
    { id: 19, name: "航拍人行道", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1513171920216-2640b288471b?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1513171920216-2640b288471b?w=200&h=200&fit=crop" },
    { id: 20, name: "空旷海岸", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1503756234508-e32369269deb?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1503756234508-e32369269deb?w=200&h=200&fit=crop" },
    { id: 21, name: "湖畔三船", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=200&fit=crop" },
    { id: 22, name: "混凝土建筑", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=200&fit=crop" },
    { id: 23, name: "青山蓝天", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?w=200&h=200&fit=crop" },
    { id: 24, name: "帝国大厦", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?w=200&h=200&fit=crop" },
    { id: 25, name: "白云沙滩", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1544536871-6e891baa163f?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1544536871-6e891baa163f?w=200&h=200&fit=crop" },
    { id: 26, name: "雪山水域", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=200&h=200&fit=crop" },
    { id: 27, name: "白色立面", difficulty: "hard", grid: 5, image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=200&h=200&fit=crop" },

    // 6×6 (专家) - 关卡 28-36
    { id: 28, name: "百老汇", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1466500419182-8602dc906b51?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1466500419182-8602dc906b51?w=200&h=200&fit=crop" },
    { id: 29, name: "日间海滩", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1543988884-c01cfa7b41c2?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1543988884-c01cfa7b41c2?w=200&h=200&fit=crop" },
    { id: 30, name: "山间河流", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=200&h=200&fit=crop" },
    { id: 31, name: "波浪结构", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=200&h=200&fit=crop" },
    { id: 32, name: "黄花田野", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1589223050279-18d1f14059cf?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1589223050279-18d1f14059cf?w=200&h=200&fit=crop" },
    { id: 33, name: "夜间街道", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?w=200&h=200&fit=crop" },
    { id: 34, name: "蓝天碧海", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?w=200&h=200&fit=crop" },
    { id: 35, name: "棕色岩石", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&h=200&fit=crop" },
    { id: 36, name: "蓝白建筑", difficulty: "expert", grid: 6, image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=200&h=200&fit=crop" },

    // 7×7 (大师) - 关卡 37-45
    { id: 37, name: "侧街建筑", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=200&h=200&fit=crop" },
    { id: 38, name: "蓝天海浪", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1597116635010-8b65f0dce76c?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1597116635010-8b65f0dce76c?w=200&h=200&fit=crop" },
    { id: 39, name: "金色山脉", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=200&h=200&fit=crop" },
    { id: 40, name: "白色高楼", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=200&h=200&fit=crop" },
    { id: 41, name: "湖畔绿地", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1604715686140-d5bef96c8b9d?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1604715686140-d5bef96c8b9d?w=200&h=200&fit=crop" },
    { id: 42, name: "纽约街角", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1617121346253-43ef95179ac9?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1617121346253-43ef95179ac9?w=200&h=200&fit=crop" },
    { id: 43, name: "平静海面", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1551418988-c21e451467b7?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1551418988-c21e451467b7?w=200&h=200&fit=crop" },
    { id: 44, name: "冰岛峡谷", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1541623089466-8e777dd05d70?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1541623089466-8e777dd05d70?w=200&h=200&fit=crop" },
    { id: 45, name: "橙黑高楼", difficulty: "master", grid: 7, image: "https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?w=200&h=200&fit=crop" },

    // 8×8 (传奇) - 关卡 46-54
    { id: 46, name: "Tribeca街道", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1518729406574-12149251ac0c?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1518729406574-12149251ac0c?w=200&h=200&fit=crop" },
    { id: 47, name: "白沙滩航拍", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1556649102-18d00a0d314f?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1556649102-18d00a0d314f?w=200&h=200&fit=crop" },
    { id: 48, name: "奥地利青山", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1612441804231-77a36b284856?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1612441804231-77a36b284856?w=200&h=200&fit=crop" },
    { id: 49, name: "抽象钢铁", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?w=200&h=200&fit=crop" },
    { id: 50, name: "绿地山脉", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?w=200&h=200&fit=crop" },
    { id: 51, name: "白色自行车", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1492724282899-01d3e50e6862?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1492724282899-01d3e50e6862?w=200&h=200&fit=crop" },
    { id: 52, name: "海浪", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?w=200&h=200&fit=crop" },
    { id: 53, name: "白云山脉", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1514467911470-2b2492c64477?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1514467911470-2b2492c64477?w=200&h=200&fit=crop" },
    { id: 54, name: "摩天大楼", difficulty: "legendary", grid: 8, image: "https://images.unsplash.com/photo-1456930266018-fda42f7404a7?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1456930266018-fda42f7404a7?w=200&h=200&fit=crop" },

    // 9×9 (史诗) - 关卡 55-63
    { id: 55, name: "维也纳空街", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1584696049838-8e692282a2e6?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1584696049838-8e692282a2e6?w=200&h=200&fit=crop" },
    { id: 56, name: "马尔代夫", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=200&h=200&fit=crop" },
    { id: 57, name: "灰棕山脉", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?w=200&h=200&fit=crop" },
    { id: 58, name: "混凝土巨石", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1522743791393-522312deeebf?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1522743791393-522312deeebf?w=200&h=200&fit=crop" },
    { id: 59, name: "棕色岩石", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1621846846625-f0bde2eb7c3c?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1621846846625-f0bde2eb7c3c?w=200&h=200&fit=crop" },
    { id: 60, name: "过马路", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1554976756-c5fa1e50c1a4?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1554976756-c5fa1e50c1a4?w=200&h=200&fit=crop" },
    { id: 61, name: "云下草原", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1422466654108-5e533f591881?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1422466654108-5e533f591881?w=200&h=200&fit=crop" },
    { id: 62, name: "溪流日出", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=200&h=200&fit=crop" },
    { id: 63, name: "棕色结构", difficulty: "epic", grid: 9, image: "https://images.unsplash.com/photo-1522517779552-6cf4c1f31ee3?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1522517779552-6cf4c1f31ee3?w=200&h=200&fit=crop" },

    // 10×10 (神话) - 关卡 64-72
    { id: 64, name: "闭眼女性", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1496672254107-b07a26403885?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1496672254107-b07a26403885?w=200&h=200&fit=crop" },
    { id: 65, name: "黑围巾女性", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?w=200&h=200&fit=crop" },
    { id: 66, name: "黑衣男子", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=200&h=200&fit=crop" },
    { id: 67, name: "头巾男子", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=200&h=200&fit=crop" },
    { id: 68, name: "水域岩石", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=200&h=200&fit=crop" },
    { id: 69, name: "花色头巾", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1617744966315-b3c950c430c7?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1617744966315-b3c950c430c7?w=200&h=200&fit=crop" },
    { id: 70, name: "马尾女性", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1674932668403-33398b81c92f?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1674932668403-33398b81c92f?w=200&h=200&fit=crop" },
    { id: 71, name: "灰棕外套", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?w=200&h=200&fit=crop" },
    { id: 72, name: "光影女性", difficulty: "mythic", grid: 10, image: "https://images.unsplash.com/photo-1518611540400-6b85a0704342?w=600&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1518611540400-6b85a0704342?w=200&h=200&fit=crop" },

    // ===== 动漫角色专题 - 每个难度3关 =====
    // 3×3·动漫 (简单) - 关卡 73-75
    { id: 73, name: "初音未来", difficulty: "easy", grid: 3, image: "https://s4.anilist.co/file/anilistcdn/character/large/b7156-DUwViOmpWw2B.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b7156-DUwViOmpWw2B.jpg", tag: "动漫" },
    { id: 74, name: "哆啦A梦", difficulty: "easy", grid: 3, image: "https://s4.anilist.co/file/anilistcdn/character/large/b4304-4eXX8C1O4Pda.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b4304-4eXX8C1O4Pda.png", tag: "动漫" },
    { id: 75, name: "皮卡丘", difficulty: "easy", grid: 3, image: "https://s4.anilist.co/file/anilistcdn/character/large/b3891-edgrZOgCJ9do.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b3891-edgrZOgCJ9do.jpg", tag: "动漫" },

    // 4×4·动漫 (中等) - 关卡 76-78
    { id: 76, name: "漩涡鸣人", difficulty: "medium", grid: 4, image: "https://s4.anilist.co/file/anilistcdn/character/large/b17-phjcWCkRuIhu.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b17-phjcWCkRuIhu.png", tag: "动漫" },
    { id: 77, name: "路飞", difficulty: "medium", grid: 4, image: "https://s4.anilist.co/file/anilistcdn/character/large/b40-MNypXsxSRb1R.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b40-MNypXsxSRb1R.png", tag: "动漫" },
    { id: 78, name: "孙悟空", difficulty: "medium", grid: 4, image: "https://s4.anilist.co/file/anilistcdn/character/large/246-wsRRr6z1kii8.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/246-wsRRr6z1kii8.png", tag: "动漫" },

    // 5×5·动漫 (困难) - 关卡 79-81
    { id: 79, name: "艾伦·耶格尔", difficulty: "hard", grid: 5, image: "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b40882-dsj7IP943WFF.jpg", tag: "动漫" },
    { id: 80, name: "五条悟", difficulty: "hard", grid: 5, image: "https://s4.anilist.co/file/anilistcdn/character/large/b127691-9zqh1xpIubn7.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b127691-9zqh1xpIubn7.png", tag: "动漫" },
    { id: 81, name: "琦玉", difficulty: "hard", grid: 5, image: "https://s4.anilist.co/file/anilistcdn/character/large/b73935-ON5d0mAcrItd.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b73935-ON5d0mAcrItd.jpg", tag: "动漫" },

    // 6×6·动漫 (专家) - 关卡 82-84
    { id: 82, name: "炭治郎", difficulty: "expert", grid: 6, image: "https://s4.anilist.co/file/anilistcdn/character/large/b126071-BTNEc1nRIv68.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b126071-BTNEc1nRIv68.png", tag: "动漫" },
    { id: 83, name: "艾尔莎", difficulty: "expert", grid: 6, image: "https://s4.anilist.co/file/anilistcdn/character/large/b5189-GR1xdok9SFsN.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b5189-GR1xdok9SFsN.jpg", tag: "动漫" },
    { id: 84, name: "坂田银时", difficulty: "expert", grid: 6, image: "https://s4.anilist.co/file/anilistcdn/character/large/b672-cP5VPriN67xJ.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b672-cP5VPriN67xJ.png", tag: "动漫" },

    // 7×7·动漫 (大师) - 关卡 85-87
    { id: 85, name: "夏目贵志", difficulty: "master", grid: 7, image: "https://s4.anilist.co/file/anilistcdn/character/large/b13783-FvmhRaCOKzKQ.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b13783-FvmhRaCOKzKQ.png", tag: "动漫" },
    { id: 86, name: "杀生丸", difficulty: "master", grid: 7, image: "https://s4.anilist.co/file/anilistcdn/character/large/28298.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/28298.jpg", tag: "动漫" },
    { id: 87, name: "鲁路修", difficulty: "master", grid: 7, image: "https://s4.anilist.co/file/anilistcdn/character/large/b417-gVLmIJu9phcK.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b417-gVLmIJu9phcK.png", tag: "动漫" },

    // 8×8·动漫 (传奇) - 关卡 88-90
    { id: 88, name: "碇真嗣", difficulty: "legendary", grid: 8, image: "https://s4.anilist.co/file/anilistcdn/character/large/b89-ZtZhXkh1rITn.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b89-ZtZhXkh1rITn.png", tag: "动漫" },
    { id: 89, name: "金木研", difficulty: "legendary", grid: 8, image: "https://s4.anilist.co/file/anilistcdn/character/large/b87275-mb13EWZBdbh3.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b87275-mb13EWZBdbh3.png", tag: "动漫" },
    { id: 90, name: "夜神月", difficulty: "legendary", grid: 8, image: "https://s4.anilist.co/file/anilistcdn/character/large/b80-26EhwSsSqQ50.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b80-26EhwSsSqQ50.png", tag: "动漫" },

    // 9×9·动漫 (史诗) - 关卡 91-93
    { id: 91, name: "桐谷和人", difficulty: "epic", grid: 9, image: "https://s4.anilist.co/file/anilistcdn/character/large/b36765-BnLbXg0Tzzh9.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b36765-BnLbXg0Tzzh9.png", tag: "动漫" },
    { id: 92, name: "冈部伦太郎", difficulty: "epic", grid: 9, image: "https://s4.anilist.co/file/anilistcdn/character/large/b35252-DY9TW6pusqeh.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b35252-DY9TW6pusqeh.png", tag: "动漫" },
    { id: 93, name: "晓美焰", difficulty: "epic", grid: 9, image: "https://s4.anilist.co/file/anilistcdn/character/large/b38005-T3NR8p2f021x.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b38005-T3NR8p2f021x.jpg", tag: "动漫" },

    // 10×10·动漫 (神话) - 关卡 94-96
    { id: 94, name: "爱德华", difficulty: "mythic", grid: 10, image: "https://s4.anilist.co/file/anilistcdn/character/large/b11-TA5Nuk7EDUZG.jpg", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b11-TA5Nuk7EDUZG.jpg", tag: "动漫" },
    { id: 95, name: "阿尼亚", difficulty: "mythic", grid: 10, image: "https://s4.anilist.co/file/anilistcdn/character/large/b138100-4Li0tWRCa5bQ.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b138100-4Li0tWRCa5bQ.png", tag: "动漫" },
    { id: 96, name: "四宫辉夜", difficulty: "mythic", grid: 10, image: "https://s4.anilist.co/file/anilistcdn/character/large/b120649-NPaWaIpWy60E.png", thumb: "https://s4.anilist.co/file/anilistcdn/character/medium/b120649-NPaWaIpWy60E.png", tag: "动漫" },
];

// ===== 难度配置（8个难度：3×3~10×10）=====
const DIFFICULTY_CONFIG = {
    easy:     { label: "3×3",   grid: 3,  color: "#00b894", time3star: 60,   time2star: 120,  move3star: 15,  move2star: 30,  unlockStars: 0 },
    medium:   { label: "4×4",   grid: 4,  color: "#fdcb6e", time3star: 180,  time2star: 360,  move3star: 40,  move2star: 80,  unlockStars: 0 },
    hard:     { label: "5×5",   grid: 5,  color: "#e17055", time3star: 360,  time2star: 600,  move3star: 80,  move2star: 160, unlockStars: 0 },
    expert:   { label: "6×6",   grid: 6,  color: "#fd79a8", time3star: 600,  time2star: 900,  move3star: 140, move2star: 280, unlockStars: 0 },
    master:   { label: "7×7",   grid: 7,  color: "#f5576c", time3star: 900,  time2star: 1500, move3star: 200, move2star: 400, unlockStars: 0 },
    legendary:{ label: "8×8",   grid: 8,  color: "#a855f7", time3star: 1500, time2star: 2400, move3star: 300, move2star: 600, unlockStars: 0 },
    epic:     { label: "9×9",   grid: 9,  color: "#3b82f6", time3star: 2100, time2star: 3600, move3star: 400, move2star: 800, unlockStars: 0 },
    mythic:   { label: "10×10", grid: 10, color: "#06b6d4", time3star: 3000, time2star: 5400, move3star: 550, move2star: 1100,unlockStars: 0 },
};

// ===== 成就系统 =====
const ACHIEVEMENTS = [
    { id: "first_win",       name: "初出茅庐",   desc: "完成第一个关卡",           icon: "🏅", check: p => p.totalCompleted >= 1 },
    { id: "ten_wins",        name: "小有成就",   desc: "完成10个关卡",             icon: "🎯", check: p => p.totalCompleted >= 10 },
    { id: "twenty_wins",     name: "拼图达人",   desc: "完成20个关卡",             icon: "🏆", check: p => p.totalCompleted >= 20 },
    { id: "fifty_wins",      name: "至高荣耀",   desc: "完成50个关卡",             icon: "👑", check: p => p.totalCompleted >= 50 },
    { id: "all_wins",        name: "全关制霸",   desc: "完成全部96个关卡",         icon: "🏛️", check: p => p.totalCompleted >= 96 },
    { id: "first_star",      name: "星光初现",   desc: "获得第一颗星",             icon: "⭐", check: p => p.totalStars >= 1 },
    { id: "fifty_stars",     name: "星光璀璨",   desc: "累计获得50颗星",           icon: "🌟", check: p => p.totalStars >= 50 },
    { id: "hundred_stars",   name: "星辰大海",   desc: "累计获得100颗星",          icon: "💫", check: p => p.totalStars >= 100 },
    { id: "two_hundred_stars", name: "星河璀璨", desc: "累计获得200颗星",          icon: "🌌", check: p => p.totalStars >= 200 },
    { id: "all_perfect",     name: "完美主义",   desc: "任意关卡获得3星",          icon: "💎", check: p => Object.values(p.levelStars).some(s => s === 3) },
    { id: "speed_demon",     name: "闪电快手",   desc: "30秒内完成任意3×3关卡",    icon: "⚡", check: p => Object.entries(p.levelBestTime).some(([id, t]) => t <= 30 && LEVELS.find(l => l.id == id)?.grid === 3) },
    { id: "combo_master",    name: "连击之王",   desc: "达成5连击",                icon: "🔥", check: p => p.maxCombo >= 5 },
    { id: "no_undo",         name: "一往无前",   desc: "不使用撤销完成任意关卡",   icon: "🚀", check: p => p.noUndoWin },
    { id: "legendary_clear", name: "传奇猎手",   desc: "完成一个传奇难度关卡",     icon: "🐉", check: p => Object.entries(p.levelStars).some(([id]) => LEVELS.find(l => l.id == id)?.difficulty === 'legendary') },
    { id: "epic_clear",      name: "史诗征服",   desc: "完成一个史诗难度关卡",     icon: "⚔️", check: p => Object.entries(p.levelStars).some(([id]) => LEVELS.find(l => l.id == id)?.difficulty === 'epic') },
    { id: "mythic_clear",    name: "神话觉醒",   desc: "完成一个神话难度关卡",     icon: "🔱", check: p => Object.entries(p.levelStars).some(([id]) => LEVELS.find(l => l.id == id)?.difficulty === 'mythic') },
];

// ===== 游戏状态 =====
let gameState = {
    currentLevel: null,
    currentDifficulty: 'easy',
    pieces: [],
    correctPieces: [],
    gridSize: 3,
    selectedPiece: null,
    moves: 0,
    timer: null,
    seconds: 0,
    isPlaying: false,
    hintActive: false,
    previewActive: false,
    imageLoaded: false,
    dragPiece: null,
    // v2 新增
    history: [],          // 撤销历史
    combo: 0,             // 连击数
    maxCombo: 0,          // 最大连击
    lastSwapCorrect: false,
    usedUndo: false,      // 是否使用过撤销
    autoSaveTimer: null,
    // v2.1 提示系统
    hintCount: 3,         // 剩余提示次数
    hintMode: 'smart',    // 'smart'=智能放置, 'highlight'=标记错误
    targetHighlight: null,// 目标高亮位置
    // v2.0 锁定系统
    lockedPieces: new Set(), // 已锁定到正确位置的拼图
};

// ===== 设置 =====
let settings = {
    sound: true,
    animation: true,
    showNumbers: false,
    theme: 'dark',
};

// ===== 进度数据 =====
let progress = {
    unlockedLevel: 1,
    levelStars: {},
    levelBestTime: {},
    levelBestMoves: {},
    totalCompleted: 0,
    totalStars: 0,
    achievements: [],
    maxCombo: 0,
    noUndoWin: false,
};

// ===== 音效管理器 =====
let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) {
        try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
    }
    return audioCtx;
}

// ===== 初始化 =====
function init() {
    loadProgress();
    loadSettings();
    updateMenuStats();
    createParticles();
    setupEventListeners();
    applyTheme(settings.theme);
    checkAchievements();
}

// ===== 存储 =====
function loadProgress() {
    try {
        const saved = localStorage.getItem('puzzleMaster_progress_v3');
        if (saved) progress = { ...progress, ...JSON.parse(saved) };
    } catch (e) {}
}
function saveProgress() {
    try { localStorage.setItem('puzzleMaster_progress_v3', JSON.stringify(progress)); } catch (e) {}
}
function loadSettings() {
    try {
        const saved = localStorage.getItem('puzzleMaster_settings_v3');
        if (saved) settings = { ...settings, ...JSON.parse(saved) };
    } catch (e) {}
    const s = document.getElementById('soundToggle');
    const a = document.getElementById('animToggle');
    const n = document.getElementById('numberToggle');
    const t = document.getElementById('themeSelect');
    if (s) s.checked = settings.sound;
    if (a) a.checked = settings.animation;
    if (n) n.checked = settings.showNumbers;
    if (t) t.value = settings.theme;
}
function saveSettings() {
    try { localStorage.setItem('puzzleMaster_settings_v3', JSON.stringify(settings)); } catch (e) {}
}

// ===== 主题 =====
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    settings.theme = theme;
    saveSettings();
}
function changeTheme(val) { applyTheme(val); }

// ===== 屏幕切换 =====
// ===== 导航历史 =====
const navHistory = [];

function showScreen(screenId) {
    // 记录导航历史（避免重复记录同一屏幕）
    const currentScreen = document.querySelector('.screen.active');
    if (currentScreen && currentScreen.id !== screenId) {
        navHistory.push(currentScreen.id);
    }
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}
function showMainMenu() { stopTimer(); showScreen('mainMenu'); updateMenuStats(); }
function showLevelSelect() { showScreen('levelSelect'); renderLevelGrid(); }
function showHowToPlay() { showScreen('howToPlay'); }
function showStats() { renderStats(); showScreen('statsScreen'); }
function showSettings() { showScreen('settingsScreen'); }
function showAchievements() { renderAchievements(); showScreen('achievementsScreen'); }

// ===== 菜单统计 =====
function updateMenuStats() {
    const u = document.getElementById('unlockedCount');
    const t = document.getElementById('totalCount');
    const s = document.getElementById('totalStarsMenu');
    if (u) u.textContent = progress.unlockedLevel;
    if (t) t.textContent = LEVELS.length;
    if (s) s.textContent = progress.totalStars;
}

// ===== 粒子效果 =====
function createParticles() {
    const c = document.getElementById('particles');
    if (!c) return;
    const emojis = ['🧩','✨','🌟','💫','🎨','🖼️','⭐','🔥'];
    for (let i = 0; i < 18; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.animationDuration = (6 + Math.random() * 6) + 's';
        c.appendChild(p);
    }
}

// ===== 关卡选择 =====
function filterDifficulty(diff) {
    gameState.currentDifficulty = diff;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab[data-diff="${diff}"]`)?.classList.add('active');
    renderLevelGrid();
}

function renderLevelGrid() {
    const grid = document.getElementById('levelGrid');
    const diff = gameState.currentDifficulty;
    const filtered = LEVELS.filter(l => l.difficulty === diff);
    const totalStarsForDiff = filtered.reduce((sum, l) => sum + (progress.levelStars[l.id] || 0), 0);
    const maxStarsForDiff = filtered.length * 3;

    let header = '';
    if (diff !== 'easy') {
        header = `<div class="diff-progress">⭐ ${totalStarsForDiff} / ${maxStarsForDiff}</div>`;
    }

    grid.innerHTML = header + filtered.map(level => {
        const stars = progress.levelStars[level.id] || 0;
        const completed = stars > 0;
        const starsDisplay = completed ? '⭐'.repeat(stars) + '☆'.repeat(3 - stars) : '';
        const badgeClass = `badge-${level.difficulty}`;
        const config = DIFFICULTY_CONFIG[level.difficulty];
        const diffLabel = config.label;
        const bestTime = progress.levelBestTime[level.id];
        const bestMoves = progress.levelBestMoves[level.id];
        const tagLabel = level.tag ? `<span class="level-tag">${level.tag}</span>` : '';
        
        // 进度显示
        let progressDisplay = '';
        if (completed) {
            progressDisplay = `<div class="level-stars">${starsDisplay}</div>`;
        } else {
            const savedPercent = getGameProgressPercent(level.id);
            if (savedPercent > 0) {
                progressDisplay = `<div class="level-progress-bar"><div class="level-progress-fill" style="width:${savedPercent}%"></div></div><div class="level-progress-text">${savedPercent}%</div>`;
            }
        }

        return `
            <div class="level-card ${completed ? 'completed' : ''}"
                 onclick="startLevel(${level.id})">
                <div class="level-thumb" style="background-image: url('${level.thumb}')">
                    ${progressDisplay}
                    <span class="level-badge ${badgeClass}">${diffLabel}</span>
                    ${tagLabel}
                </div>
                <div class="level-info">
                    <div class="level-number">关卡 ${level.id}</div>
                    <div class="level-name">${level.name}</div>
                    <div class="level-difficulty">${level.grid}×${level.grid}</div>
                    ${bestTime ? `<div class="level-best">最佳: ${formatTime(bestTime)} / ${bestMoves}步</div>` : ''}
                </div>
            </div>`;
    }).join('');
}

// ===== 游戏核心 =====
function startLevel(levelId) {
    const level = LEVELS.find(l => l.id === levelId);
    if (!level) return;

    gameState.currentLevel = level;
    gameState.gridSize = level.grid;
    gameState.moves = 0;
    gameState.seconds = 0;
    gameState.selectedPiece = null;
    gameState.isPlaying = false;
    gameState.hintActive = false;
    gameState.previewActive = false;
    gameState.imageLoaded = false;
    gameState.dragPiece = null;
    gameState.history = [];
    gameState.combo = 0;
    gameState.maxCombo = 0;
    gameState.lastSwapCorrect = false;
    gameState.usedUndo = false;
    gameState.hintCount = 3;
    gameState.hintMode = 'smart';
    gameState.targetHighlight = null;
    gameState.lockedPieces = new Set();

    // 检查是否有保存的进度
    const savedProgress = loadGameProgress(levelId);

    // 更新游戏界面标题
    document.getElementById('gameLevelName').textContent = level.name;
    document.getElementById('gameDiffBadge').textContent = DIFFICULTY_CONFIG[level.difficulty].label;
    document.getElementById('gameDiffBadge').className = `game-diff-badge badge-${level.difficulty}`;
    document.getElementById('moveCount').textContent = savedProgress ? savedProgress.moves : '0';
    document.getElementById('timerDisplay').textContent = savedProgress ? formatTime(savedProgress.seconds) : '00:00';
    document.getElementById('comboDisplay').textContent = '';
    document.getElementById('comboDisplay').className = 'combo-display';
    updateUndoButton();
    updateHintButton();

    // 显示加载
    showScreen('gameScreen');
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex';
    overlay.querySelector('p').textContent = savedProgress ? '恢复进度中...' : '加载图片中...';

    // 预加载图片
    preloadImage(level.image).then(() => {
        gameState.imageLoaded = true;
        initPuzzle();
        // 恢复保存的进度
        if (savedProgress) {
            gameState.pieces = savedProgress.pieces;
            gameState.correctPieces = savedProgress.correctPieces;
            gameState.lockedPieces = new Set(savedProgress.lockedPieces);
            gameState.moves = savedProgress.moves;
            gameState.seconds = savedProgress.seconds;
            gameState.combo = savedProgress.combo || 0;
            gameState.maxCombo = savedProgress.maxCombo || 0;
            gameState.usedUndo = savedProgress.usedUndo || false;
            gameState.hintCount = savedProgress.hintCount || 3;
            document.getElementById('moveCount').textContent = gameState.moves;
            document.getElementById('timerDisplay').textContent = formatTime(gameState.seconds);
            updateHintButton();
            renderPuzzle();
        }
        overlay.style.display = 'none';
        gameState.isPlaying = true;
        startTimer();
        startAutoSave();
    }).catch(() => {
        // 备用图片
        level.image = `https://picsum.photos/seed/fallback${level.id}/600/600`;
        preloadImage(level.image).then(() => {
            gameState.imageLoaded = true;
            initPuzzle();
            if (savedProgress) {
                gameState.pieces = savedProgress.pieces;
                gameState.correctPieces = savedProgress.correctPieces;
                gameState.lockedPieces = new Set(savedProgress.lockedPieces);
                gameState.moves = savedProgress.moves;
                gameState.seconds = savedProgress.seconds;
                gameState.combo = savedProgress.combo || 0;
                gameState.maxCombo = savedProgress.maxCombo || 0;
                gameState.usedUndo = savedProgress.usedUndo || false;
                gameState.hintCount = savedProgress.hintCount || 3;
                document.getElementById('moveCount').textContent = gameState.moves;
                document.getElementById('timerDisplay').textContent = formatTime(gameState.seconds);
                updateHintButton();
                renderPuzzle();
            }
            overlay.style.display = 'none';
            gameState.isPlaying = true;
            startTimer();
            startAutoSave();
        });
    });
}

function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        const timeout = setTimeout(() => { img.src = ''; reject(); }, 10000);
        img.onload = () => { clearTimeout(timeout); resolve(); };
        img.onerror = () => { clearTimeout(timeout); reject(); };
        img.src = url;
    });
}

function initPuzzle() {
    const n = gameState.gridSize;
    const total = n * n;
    const pieces = Array.from({ length: total }, (_, i) => i);
    shuffleArray(pieces);
    // 确保可解且非已完成
    while (!isSolvable(pieces, n) || isSolved(pieces)) {
        shuffleArray(pieces);
    }
    gameState.pieces = pieces;
    gameState.correctPieces = pieces.map((p, i) => p === i);
    // 锁定初始就在正确位置的拼图
    gameState.lockedPieces = new Set();
    pieces.forEach((p, i) => {
        if (p === i) gameState.lockedPieces.add(i);
    });
    renderPuzzle();
}

function renderPuzzle() {
    const container = document.getElementById('puzzleGrid');
    const n = gameState.gridSize;
    const level = gameState.currentLevel;
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.innerHTML = '';

    gameState.pieces.forEach((pieceIndex, position) => {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.dataset.position = position;
        piece.dataset.piece = pieceIndex;

        const row = Math.floor(pieceIndex / n);
        const col = pieceIndex % n;
        piece.style.backgroundImage = `url('${level.image}')`;
        piece.style.backgroundSize = `${n * 100}% ${n * 100}%`;
        piece.style.backgroundPosition = `${col * 100 / (n - 1)}% ${row * 100 / (n - 1)}%`;

        const isLocked = gameState.lockedPieces.has(position);

        // 正确位置高亮
        if (pieceIndex === position) {
            piece.classList.add('correct');
        }

        // 锁定状态
        if (isLocked) {
            piece.classList.add('locked');
        }

        // 选中状态
        if (gameState.selectedPiece === position) {
            piece.classList.add('selected');
        }

        // 提示高亮 - 标记错误位置
        if (gameState.hintActive && pieceIndex !== position) {
            piece.classList.add('hint-wrong');
        }

        // 目标位置高亮
        if (gameState.targetHighlight === pieceIndex) {
            piece.classList.add('hint-target');
        }

        // 数字显示
        if (settings.showNumbers) {
            piece.setAttribute('data-number', pieceIndex + 1);
        }

        // 事件 - 锁定的拼图不可交互
        if (!isLocked) {
            piece.addEventListener('click', () => handlePieceClick(position));
            piece.addEventListener('dragstart', (e) => handleDragStart(e, position));
            piece.addEventListener('dragover', (e) => e.preventDefault());
            piece.addEventListener('drop', (e) => handleDrop(e, position));
            piece.addEventListener('touchstart', (e) => handleTouchStart(e, position), { passive: false });
            piece.addEventListener('touchmove', (e) => handleTouchMove(e), { passive: false });
            piece.addEventListener('touchend', (e) => handleTouchEnd(e, position), { passive: false });
        }

        container.appendChild(piece);
    });

    // 更新进度条
    updateProgressBar();
}

function updateProgressBar() {
    const n = gameState.gridSize;
    const total = n * n;
    const correct = gameState.lockedPieces.size;
    const pct = (correct / total) * 100;
    const bar = document.getElementById('progressBar');
    const text = document.getElementById('progressText');
    if (bar) bar.style.width = pct + '%';
    if (text) text.textContent = `${correct}/${total}`;
}

// ===== 交换逻辑 =====
function swapPieces(pos1, pos2) {
    if (pos1 === pos2) return;
    // 锁定的拼图不可交换
    if (gameState.lockedPieces.has(pos1) || gameState.lockedPieces.has(pos2)) return;

    // 保存撤销历史
    gameState.history.push({
        pieces: [...gameState.pieces],
        moves: gameState.moves,
        combo: gameState.combo,
        maxCombo: gameState.maxCombo,
        lockedPieces: new Set(gameState.lockedPieces),
    });

    // 交换
    [gameState.pieces[pos1], gameState.pieces[pos2]] = [gameState.pieces[pos2], gameState.pieces[pos1]];
    gameState.moves++;
    document.getElementById('moveCount').textContent = gameState.moves;

    // 连击检测
    const p1Correct = gameState.pieces[pos1] === pos1;
    const p2Correct = gameState.pieces[pos2] === pos2;
    const anyCorrect = p1Correct || p2Correct;

    if (anyCorrect) {
        if (gameState.lastSwapCorrect) {
            gameState.combo++;
        } else {
            gameState.combo = 1;
        }
        gameState.lastSwapCorrect = true;
        if (gameState.combo > gameState.maxCombo) gameState.maxCombo = gameState.combo;
        updateComboDisplay();
        playSound('correct');
    } else {
        gameState.combo = 0;
        gameState.lastSwapCorrect = false;
        updateComboDisplay();
        playSound('swap');
    }

    // 正确位置动画 + 锁定
    if (p1Correct) {
        gameState.lockedPieces.add(pos1);
        animateCorrectPiece(pos1);
        animateLockPiece(pos1);
    }
    if (p2Correct) {
        gameState.lockedPieces.add(pos2);
        animateCorrectPiece(pos2);
        animateLockPiece(pos2);
    }

    // 撤销按钮状态
    updateUndoButton();

    // 重新渲染
    renderPuzzle();

    // 检查完成
    if (isSolved(gameState.pieces)) {
        setTimeout(() => completeLevel(), 300);
    }
}

function animateCorrectPiece(pos) {
    setTimeout(() => {
        const piece = document.querySelector(`.puzzle-piece[data-position="${pos}"]`);
        if (piece) {
            piece.classList.add('piece-correct-anim');
            setTimeout(() => piece.classList.remove('piece-correct-anim'), 600);
        }
    }, 50);
}

// 锁定闪烁动画
function animateLockPiece(pos) {
    setTimeout(() => {
        const piece = document.querySelector(`.puzzle-piece[data-position="${pos}"]`);
        if (piece) {
            piece.classList.add('piece-lock-flash');
            setTimeout(() => piece.classList.remove('piece-lock-flash'), 1000);
        }
    }, 100);
}

// ===== 撤销 =====
function undoMove() {
    if (gameState.history.length === 0) return;
    const prev = gameState.history.pop();
    gameState.pieces = prev.pieces;
    gameState.moves = prev.moves;
    gameState.combo = prev.combo;
    gameState.maxCombo = prev.maxCombo;
    gameState.lockedPieces = prev.lockedPieces;
    gameState.usedUndo = true;
    document.getElementById('moveCount').textContent = gameState.moves;
    updateComboDisplay();
    updateUndoButton();
    renderPuzzle();
    playSound('undo');
}

function updateUndoButton() {
    const btn = document.getElementById('undoBtn');
    if (btn) {
        btn.disabled = gameState.history.length === 0;
        btn.style.opacity = gameState.history.length === 0 ? '0.4' : '1';
    }
}

// ===== 连击显示 =====
function updateComboDisplay() {
    const el = document.getElementById('comboDisplay');
    if (!el) return;
    if (gameState.combo >= 2) {
        el.textContent = `🔥 ${gameState.combo}连击!`;
        el.className = 'combo-display combo-active';
        // 重触发动画
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = '';
    } else {
        el.textContent = '';
        el.className = 'combo-display';
    }
}

// ===== 可解性校验 =====
function isSolvable(pieces, n) {
    const inversions = countInversions(pieces);
    if (n % 2 === 1) return inversions % 2 === 0;
    const blankRow = Math.floor(pieces.indexOf(pieces.length - 1) / n);
    return (inversions + n - blankRow) % 2 === 0;
}

function countInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) count++;
        }
    }
    return count;
}

function isSolved(pieces) {
    return pieces.every((p, i) => p === i);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// ===== 交互处理 =====
function handlePieceClick(position) {
    if (!gameState.isPlaying) return;
    // 锁定的拼图不可选中
    if (gameState.lockedPieces.has(position)) return;
    if (gameState.selectedPiece === null) {
        gameState.selectedPiece = position;
        playSound('select');
        // 设置目标高亮
        const pieceId = gameState.pieces[position];
        if (pieceId !== position) {
            gameState.targetHighlight = pieceId;
        }
        renderPuzzle();
    } else if (gameState.selectedPiece === position) {
        gameState.selectedPiece = null;
        gameState.targetHighlight = null;
        renderPuzzle();
    } else {
        swapPieces(gameState.selectedPiece, position);
        gameState.selectedPiece = null;
        gameState.targetHighlight = null;
    }
}

// 拖拽
function handleDragStart(e, position) {
    if (!gameState.isPlaying) return;
    if (gameState.lockedPieces.has(position)) return;
    gameState.dragPiece = position;
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('dragging');
    setTimeout(() => e.target.classList.remove('dragging'), 200);
}

function handleDrop(e, position) {
    e.preventDefault();
    if (!gameState.isPlaying || gameState.dragPiece === null) return;
    swapPieces(gameState.dragPiece, position);
    gameState.dragPiece = null;
}

// 触摸
let touchStartPos = null;
let touchPiece = null;
function handleTouchStart(e, position) {
    if (!gameState.isPlaying) return;
    if (gameState.lockedPieces.has(position)) return;
    e.preventDefault();
    touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    touchPiece = position;
}
function handleTouchMove(e) {
    e.preventDefault();
}
function handleTouchEnd(e, position) {
    if (!gameState.isPlaying || touchPiece === null) return;
    const endPos = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    const dx = endPos.x - touchStartPos.x;
    const dy = endPos.y - touchStartPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 20) {
        handlePieceClick(touchPiece);
    } else {
        // 滑动方向交换
        const n = gameState.gridSize;
        const row = Math.floor(touchPiece / n);
        const col = touchPiece % n;
        let target = -1;
        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0 && col < n - 1) target = touchPiece + 1;
            else if (dx < 0 && col > 0) target = touchPiece - 1;
        } else {
            if (dy > 0 && row < n - 1) target = touchPiece + n;
            else if (dy < 0 && row > 0) target = touchPiece - n;
        }
        if (target >= 0) swapPieces(touchPiece, target);
    }
    touchPiece = null;
    touchStartPos = null;
}

// ===== 计时器 =====
function startTimer() {
    stopTimer();
    gameState.timer = setInterval(() => {
        gameState.seconds++;
        document.getElementById('timerDisplay').textContent = formatTime(gameState.seconds);
    }, 1000);
}
function stopTimer() {
    if (gameState.timer) { clearInterval(gameState.timer); gameState.timer = null; }
}
function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// ===== 自动存档 =====
function startAutoSave() {
    stopAutoSave();
    gameState.autoSaveTimer = setInterval(() => {
        if (gameState.isPlaying) {
            saveProgress();
            saveGameProgress();
        }
    }, 30000);
}
function stopAutoSave() {
    if (gameState.autoSaveTimer) { clearInterval(gameState.autoSaveTimer); gameState.autoSaveTimer = null; }
}

// ===== 提示 =====
// ===== 提示系统 v2.1 =====
function toggleHint() {
    if (gameState.hintMode === 'smart') {
        useSmartHint();
    } else {
        toggleHighlightHint();
    }
}

// 智能提示：自动将一个错位块放到正确位置
function useSmartHint() {
    if (gameState.hintCount <= 0) {
        showToast('提示次数已用完');
        playSound('click');
        return;
    }
    if (!gameState.isPlaying) return;

    // 找到所有不在正确位置的块
    const wrongPieces = [];
    for (let i = 0; i < gameState.pieces.length; i++) {
        if (gameState.pieces[i] !== i) {
            wrongPieces.push(i);
        }
    }

    if (wrongPieces.length === 0) {
        showToast('拼图已完成！');
        return;
    }

    // 随机选一个错位块
    const targetPiece = wrongPieces[Math.floor(Math.random() * wrongPieces.length)];
    // 找到这个块当前所在的位置
    const currentPos = gameState.pieces.indexOf(targetPiece);
    // 将它和正确位置的块交换
    const pieceAtTarget = gameState.pieces[targetPiece];

    // 记录历史（用于撤销）
    gameState.history.push({
        pieces: [...gameState.pieces],
        moves: gameState.moves,
        combo: gameState.combo,
        maxCombo: gameState.maxCombo
    });

    // 执行交换
    gameState.pieces[targetPiece] = targetPiece;
    gameState.pieces[currentPos] = pieceAtTarget;
    gameState.moves++;
    gameState.hintCount--;
    gameState.usedUndo = false; // 提示不影响撤销成就

    // 更新UI
    document.getElementById('moveCount').textContent = gameState.moves;
    renderPuzzle();
    updateHintButton();
    updateUndoButton();

    // 高亮被放置的块
    setTimeout(() => {
        const placedEl = document.querySelector(`.puzzle-piece[data-position="${targetPiece}"]`);
        if (placedEl) {
            placedEl.classList.add('hint-placed');
            setTimeout(() => placedEl.classList.remove('hint-placed'), 1500);
        }
    }, 50);

    // 检查是否完成
    if (isSolved()) {
        completeLevel();
    }

    playSound('correct');
}

// 高亮提示：标记所有错误位置
function toggleHighlightHint() {
    gameState.hintActive = !gameState.hintActive;
    const btn = document.getElementById('hintBtn');
    btn.classList.toggle('active', gameState.hintActive);
    document.querySelectorAll('.puzzle-piece').forEach(p => {
        const pos = parseInt(p.dataset.position);
        const piece = parseInt(p.dataset.piece);
        if (gameState.hintActive && piece !== pos) {
            p.classList.add('hint-wrong');
        } else {
            p.classList.remove('hint-wrong');
        }
    });
    playSound('click');
}

// 切换提示模式
function cycleHintMode() {
    const modes = ['smart', 'highlight'];
    const idx = modes.indexOf(gameState.hintMode);
    gameState.hintMode = modes[(idx + 1) % modes.length];
    gameState.hintActive = false;
    // 清除高亮
    document.querySelectorAll('.puzzle-piece').forEach(p => p.classList.remove('hint-wrong', 'hint-target'));
    updateHintButton();
    playSound('click');
}

// 更新提示按钮显示
function updateHintButton() {
    const btn = document.getElementById('hintBtn');
    if (!btn) return;
    const modeLabel = gameState.hintMode === 'smart' ? '💡' : '👁';
    const countSpan = gameState.hintMode === 'smart' ? `(${gameState.hintCount})` : '';
    btn.innerHTML = `${modeLabel} 提示${countSpan}`;
    btn.classList.toggle('hint-smart', gameState.hintMode === 'smart');
    btn.classList.toggle('hint-highlight', gameState.hintMode === 'highlight');
}

// 选中块时显示目标位置高亮
function showTargetHighlight(pieceId) {
    clearTargetHighlight();
    if (pieceId === undefined || pieceId === null) return;
    // 找到该块应该去的位置
    const targetPos = gameState.pieces.indexOf(pieceId);
    if (targetPos === pieceId) return; // 已在正确位置
    const el = document.querySelector(`.puzzle-piece[data-position="${pieceId}"]`);
    if (el) {
        el.classList.add('hint-target');
        gameState.targetHighlight = pieceId;
    }
}

function clearTargetHighlight() {
    if (gameState.targetHighlight !== null) {
        document.querySelectorAll('.puzzle-piece').forEach(p => p.classList.remove('hint-target'));
        gameState.targetHighlight = null;
    }
}

// ===== 预览 =====
function togglePreview() {
    gameState.previewActive = !gameState.previewActive;
    const overlay = document.getElementById('previewOverlay');
    if (gameState.previewActive) {
        overlay.style.display = 'flex';
        overlay.style.backgroundImage = `url('${gameState.currentLevel.image}')`;
    } else {
        overlay.style.display = 'none';
    }
}

// ===== Android返回键处理 =====
function handleBackButton() {
    // 1. 退出对话框打开 → 关闭对话框
    const quitDialog = document.getElementById('quitDialog');
    if (quitDialog && quitDialog.style.display === 'flex') {
        hideQuitDialog();
        return;
    }
    // 2. 预览覆盖层打开 → 关闭预览
    const previewOverlay = document.getElementById('previewOverlay');
    if (previewOverlay && previewOverlay.style.display === 'flex') {
        gameState.previewActive = false;
        previewOverlay.style.display = 'none';
        return;
    }
    // 3. 当前活动屏幕判断
    const activeScreen = document.querySelector('.screen.active');
    if (!activeScreen) return;
    const screenId = activeScreen.id;
    // 游戏中 → 显示退出对话框
    if (screenId === 'gameScreen') {
        showQuitDialog();
        return;
    }
    // 完成界面 → 关卡选择
    if (screenId === 'completeScreen') {
        showLevelSelect();
        return;
    }
    // 关卡选择 → 主菜单
    if (screenId === 'levelSelect') {
        showMainMenu();
        return;
    }
    // 子屏幕（教程/统计/设置/成就）→ 导航历史回退或主菜单
    if (screenId === 'howToPlay' || screenId === 'statsScreen' || screenId === 'settingsScreen' || screenId === 'achievementsScreen') {
        if (navHistory.length > 0) {
            const prevScreen = navHistory.pop();
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(prevScreen).classList.add('active');
            window.scrollTo(0, 0);
        } else {
            showMainMenu();
        }
        return;
    }
    // 主菜单 → 退出应用
    if (screenId === 'mainMenu') {
        if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
            window.Capacitor.Plugins.App.exitApp();
        } else if (typeof Android !== 'undefined' && Android.finish) {
            Android.finish();
        }
        return;
    }
}

// ===== 退出 =====
function showQuitDialog() {
    document.getElementById('quitDialog').style.display = 'flex';
}
function hideQuitDialog() {
    document.getElementById('quitDialog').style.display = 'none';
}
function quitGame(saveProgress) {
    stopTimer();
    stopAutoSave();
    gameState.isPlaying = false;
    hideQuitDialog();
    if (saveProgress && gameState.currentLevel) {
        saveGameProgress();
    } else if (gameState.currentLevel) {
        clearGameProgress(gameState.currentLevel.id);
    }
    showLevelSelect();
}

// ===== 游戏进度保存/加载 =====
function saveGameProgress() {
    if (!gameState.currentLevel) return;
    const levelId = gameState.currentLevel.id;
    const progressData = {
        pieces: gameState.pieces,
        correctPieces: gameState.correctPieces,
        lockedPieces: [...gameState.lockedPieces],
        moves: gameState.moves,
        seconds: gameState.seconds,
        combo: gameState.combo,
        maxCombo: gameState.maxCombo,
        usedUndo: gameState.usedUndo,
        hintCount: gameState.hintCount,
        timestamp: Date.now()
    };
    try {
        localStorage.setItem('puzzleMaster_game_' + levelId, JSON.stringify(progressData));
    } catch (e) {}
}

function loadGameProgress(levelId) {
    try {
        const saved = localStorage.getItem('puzzleMaster_game_' + levelId);
        if (saved) return JSON.parse(saved);
    } catch (e) {}
    return null;
}

function clearGameProgress(levelId) {
    try {
        localStorage.removeItem('puzzleMaster_game_' + levelId);
    } catch (e) {}
}

function getGameProgressPercent(levelId) {
    const saved = loadGameProgress(levelId);
    if (!saved) return 0;
    const level = LEVELS.find(l => l.id === levelId);
    if (!level) return 0;
    const total = level.grid * level.grid;
    const locked = (saved.lockedPieces || []).length;
    return Math.round((locked / total) * 100);
}

// ===== 完成关卡 =====
function completeLevel() {
    stopTimer();
    stopAutoSave();
    gameState.isPlaying = false;

    const level = gameState.currentLevel;
    const config = DIFFICULTY_CONFIG[level.difficulty];
    const stars = calculateStars(gameState.seconds, gameState.moves, config);

    // 清除保存的游戏进度
    clearGameProgress(level.id);

    // 更新进度
    const prevStars = progress.levelStars[level.id] || 0;
    if (stars > prevStars) progress.levelStars[level.id] = stars;
    if (!progress.levelBestTime[level.id] || gameState.seconds < progress.levelBestTime[level.id]) {
        progress.levelBestTime[level.id] = gameState.seconds;
    }
    if (!progress.levelBestMoves[level.id] || gameState.moves < progress.levelBestMoves[level.id]) {
        progress.levelBestMoves[level.id] = gameState.moves;
    }
    progress.totalCompleted = Object.keys(progress.levelStars).length;
    progress.totalStars = Object.values(progress.levelStars).reduce((a, b) => a + b, 0);
    if (level.id >= progress.unlockedLevel) progress.unlockedLevel = Math.min(level.id + 1, LEVELS.length);
    if (gameState.maxCombo > progress.maxCombo) progress.maxCombo = gameState.maxCombo;
    if (!gameState.usedUndo && stars > 0) progress.noUndoWin = true;

    saveProgress();
    checkAchievements();

    // 显示完成界面
    showCompleteScreen(level, stars, config);
    playSound('complete');
    createConfetti();
}

function calculateStars(time, moves, config) {
    let stars = 0;
    if (time <= config.time3star && moves <= config.move3star) stars = 3;
    else if (time <= config.time2star && moves <= config.move2star) stars = 2;
    else stars = 1;
    return stars;
}

function showCompleteScreen(level, stars, config) {
    document.getElementById('completeLevelName').textContent = level.name;
    document.getElementById('completeTime').textContent = formatTime(gameState.seconds);
    document.getElementById('completeMoves').textContent = gameState.moves;
    document.getElementById('completeCombo').textContent = gameState.maxCombo > 0 ? `最大连击: ${gameState.maxCombo}` : '';

    // 星星动画
    const starsContainer = document.getElementById('completeStars');
    starsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const star = document.createElement('span');
        star.className = 'result-star';
        star.textContent = i < stars ? '⭐' : '☆';
        if (i < stars) {
            star.style.animationDelay = (i * 0.3) + 's';
            star.classList.add('star-earned');
        }
        starsContainer.appendChild(star);
    }

    // 下一关按钮
    const nextBtn = document.getElementById('nextLevelBtn');
    const nextLevel = LEVELS.find(l => l.id === level.id + 1);
    if (nextLevel && nextLevel.id <= progress.unlockedLevel) {
        nextBtn.style.display = 'inline-flex';
        nextBtn.onclick = () => startLevel(nextLevel.id);
    } else {
        nextBtn.style.display = 'none';
    }

    showScreen('completeScreen');
}

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#ff6b6b','#feca57','#48dbfb','#ff9ff3','#54a0ff','#5f27cd','#01a3a4','#f368e0'];
    for (let i = 0; i < 50; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + '%';
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDelay = Math.random() * 2 + 's';
        c.style.animationDuration = (2 + Math.random() * 3) + 's';
        container.appendChild(c);
    }
    setTimeout(() => container.innerHTML = '', 6000);
}

// ===== 成就系统 =====
function checkAchievements() {
    let newAchievements = [];
    ACHIEVEMENTS.forEach(ach => {
        if (!progress.achievements.includes(ach.id) && ach.check(progress)) {
            progress.achievements.push(ach.id);
            newAchievements.push(ach);
        }
    });
    if (newAchievements.length > 0) {
        saveProgress();
        newAchievements.forEach((ach, i) => {
            setTimeout(() => showAchievementToast(ach), i * 1500);
        });
    }
}

function showAchievementToast(ach) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `<span class="toast-icon">${ach.icon}</span><div class="toast-text"><strong>${ach.name}</strong><br><small>${ach.desc}</small></div>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function renderAchievements() {
    const grid = document.getElementById('achievementGrid');
    if (!grid) return;
    grid.innerHTML = ACHIEVEMENTS.map(ach => {
        const unlocked = progress.achievements.includes(ach.id);
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${unlocked ? ach.icon : '🔒'}</div>
                <div class="achievement-info">
                    <div class="achievement-name">${ach.name}</div>
                    <div class="achievement-desc">${ach.desc}</div>
                </div>
                ${unlocked ? '<div class="achievement-check">✓</div>' : ''}
            </div>`;
    }).join('');

    const count = document.getElementById('achievementCount');
    if (count) count.textContent = `${progress.achievements.length} / ${ACHIEVEMENTS.length}`;
}

// ===== 统计 =====
function renderStats() {
    const totalStars = progress.totalStars;
    const totalCompleted = progress.totalCompleted;
    const maxPossibleStars = LEVELS.length * 3;
    const threeStarCount = Object.values(progress.levelStars).filter(s => s === 3).length;
    const bestTime = Math.min(...Object.values(progress.levelBestTime), Infinity);
    const bestMoves = Math.min(...Object.values(progress.levelBestMoves), Infinity);

    document.getElementById('statTotalStars').textContent = totalStars;
    document.getElementById('statCompleted').textContent = totalCompleted;
    document.getElementById('statThreeStars').textContent = threeStarCount;
    document.getElementById('statMaxCombo').textContent = progress.maxCombo;
    document.getElementById('statBestTime').textContent = bestTime < Infinity ? formatTime(bestTime) : '--:--';
    document.getElementById('statBestMoves').textContent = bestMoves < Infinity ? bestMoves : '--';
    document.getElementById('statAchievements').textContent = `${progress.achievements.length} / ${ACHIEVEMENTS.length}`;
    document.getElementById('statProgress').textContent = `${totalStars} / ${maxPossibleStars}`;
}

// ===== 设置 =====
function toggleSound() {
    settings.sound = document.getElementById('soundToggle').checked;
    saveSettings();
}
function toggleAnimation() {
    settings.animation = document.getElementById('animToggle').checked;
    document.body.classList.toggle('no-anim', !settings.animation);
    saveSettings();
}
function toggleNumbers() {
    settings.showNumbers = !settings.showNumbers;
    const cb = document.getElementById('numberToggle');
    if (cb) cb.checked = settings.showNumbers;
    saveSettings();
    if (gameState.isPlaying) renderPuzzle();
}

function resetProgress() {
    if (!confirm('确定要重置所有进度吗？此操作不可撤销！')) return;
    progress = {
        unlockedLevel: 1,
        levelStars: {},
        levelBestTime: {},
        levelBestMoves: {},
        totalCompleted: 0,
        totalStars: 0,
        achievements: [],
        maxCombo: 0,
        noUndoWin: false,
    };
    saveProgress();
    updateMenuStats();
    alert('进度已重置！');
}

// ===== 音效 =====
function playSound(type) {
    if (!settings.sound) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const sounds = {
            select:   { freq: 440, dur: 0.08, type: 'sine', vol: 0.15 },
            swap:     { freq: 330, dur: 0.1,  type: 'triangle', vol: 0.12 },
            correct:  { freq: 660, dur: 0.15, type: 'sine', vol: 0.2 },
            complete: { freq: 880, dur: 0.5,  type: 'sine', vol: 0.25 },
            click:    { freq: 520, dur: 0.06, type: 'sine', vol: 0.1 },
            undo:     { freq: 280, dur: 0.1,  type: 'sawtooth', vol: 0.08 },
        };
        const s = sounds[type] || sounds.click;
        osc.type = s.type;
        osc.frequency.setValueAtTime(s.freq, ctx.currentTime);
        if (type === 'complete') {
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.15);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.3);
        }
        gain.gain.setValueAtTime(s.vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + s.dur);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + s.dur);
    } catch (e) {}
}

// ===== 事件监听 =====
function setupEventListeners() {
    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { handleBackButton(); return; }
        if (!gameState.isPlaying) return;
        if (e.key === 'z' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); undoMove(); }
        if (e.key === 'h') toggleHint();
        if (e.key === 'p') togglePreview();
    });

    // Android返回键（Capacitor）
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
        window.Capacitor.Plugins.App.addListener('backButton', () => {
            handleBackButton();
        });
    } else if (document.addEventListener) {
        // Cordova兼容
        document.addEventListener('backbutton', (e) => {
            e.preventDefault();
            handleBackButton();
        }, false);
    }

    // 预览覆盖层关闭
    const previewOverlay = document.getElementById('previewOverlay');
    if (previewOverlay) {
        previewOverlay.addEventListener('click', () => {
            gameState.previewActive = false;
            previewOverlay.style.display = 'none';
        });
        previewOverlay.addEventListener('touchend', () => {
            gameState.previewActive = false;
            previewOverlay.style.display = 'none';
        });
    }

    // 国产手机触摸滑动修复 - 确保关卡选择界面可正常滑动
    setupChinesePhoneScrollFix();
}

// ===== 国产手机触摸滑动修复 =====
function setupChinesePhoneScrollFix() {
    const levelSelect = document.getElementById('levelSelect');
    const tabs = document.querySelector('.difficulty-tabs');
    
    if (!levelSelect) return;

    // 修复关卡选择界面的纵向滑动
    let touchStartY = 0;
    let touchStartX = 0;
    let isScrolling = false;

    levelSelect.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        isScrolling = false;
    }, { passive: true });

    levelSelect.addEventListener('touchmove', function(e) {
        if (!isScrolling) {
            const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
            const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
            // 纵向滑动大于横向时，标记为滚动
            if (deltaY > deltaX && deltaY > 5) {
                isScrolling = true;
            }
        }
    }, { passive: true });

    // 修复难度标签的横向滑动 - 阻止纵向滑动冲突
    if (tabs) {
        let tabTouchStartY = 0;
        let tabTouchStartX = 0;
        
        tabs.addEventListener('touchstart', function(e) {
            tabTouchStartY = e.touches[0].clientY;
            tabTouchStartX = e.touches[0].clientX;
        }, { passive: true });

        tabs.addEventListener('touchmove', function(e) {
            const deltaX = Math.abs(e.touches[0].clientX - tabTouchStartX);
            const deltaY = Math.abs(e.touches[0].clientY - tabTouchStartY);
            // 横向滑动时阻止事件冒泡，避免触发父容器纵向滚动
            if (deltaX > deltaY && deltaX > 5) {
                e.stopPropagation();
            }
        }, { passive: true });
    }
}

// ===== 启动 =====
window.addEventListener('DOMContentLoaded', init);