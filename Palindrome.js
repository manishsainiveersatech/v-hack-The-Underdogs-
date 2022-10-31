class PalindromicChanges
{
    static main(args)
    {
        var str = prompt("Please enter your name", "mat");
        var m = prompt("Please enter your name", 2);
        var cost = Array(26).fill(0).map(()=>new Array(26).fill(0));
        var MAX = Number.MAX_VALUE * parseInt(10000);
        for (let i = 0; i < 26; i++)
        {
            cost[i].fill(MAX);
        }
        var a = [];
        for(let i = 0; i< m; i++) {
            let temp = prompt("Please enter your inputs", "");
            temp = temp.split(" ");
            temp[2] = +temp[2];
            a[i] = temp;
        }
        var ch = a;
        for (let i = 0; i < m; i++)
        {
            var x = ch[i][0].charCodeAt(0) - 'a'.charCodeAt(0);
            var y = ch[i][1].charCodeAt(0) - 'a'.charCodeAt(0);
            cost[x][y] = cost[y][x] = ch[i][2];
        }
        for (let k = 0; k < 26; k++)
        {
            for (let i = 0; i < 26; i++)
            {
                for (let j = 0; j < 26; j++)
                {
                    if (cost[i][k] + cost[k][j] < cost[i][j])
                    {
                        cost[i][j] = cost[i][k] + cost[k][j];
                    }
                }
            }
        }
        var ans = 0;
        var impossible = false;
        for (let i = 0; i < parseInt(str.length / 2); i++)
        {
            var x = str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
            var y = str.charAt(str.length - 1 - i).charCodeAt(0) - 'a'.charCodeAt(0);
            if (x != y)
            {
                var min = Math.min(cost[x][y],cost[y][x]);
                if (min == MAX)
                {
                    impossible = true;
                }
                else 
                {
                    ans += min;
                }
            }
        }
        console.log(impossible ? "Cannot be a palindrome with the given inputs." : ans);
    }
}
PalindromicChanges.main([]);
