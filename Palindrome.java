import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class PalindromicChanges {
    public static void main(String args[]) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        String s = br.readLine();
        int m = Integer.parseInt(s);
        long[][] cost = new long[26][26];
        long MAX = Integer.MAX_VALUE * (long) 10000;
        for (int i = 0; i < 26; i++) {
            Arrays.fill(cost[i], MAX);
        }
        char ch[][] = new char[3][m];
        for(int i = 0; i < m; i++) {
            String t = br.readLine();
            char[] temp = { t.charAt(0), t.charAt(2), (char)Integer.parseInt(t.substring(4)) };
            ch[i] = temp;
        }
        for (int i = 0; i < m; i++) {
            int x = ch[i][0] - 'a', y = ch[i][1] - 'a';
            cost[x][y] = cost[y][x] = ch[i][2];
        }
        for (int k = 0; k < 26; k++) {
            for (int i = 0; i < 26; i++) {
                for (int j = 0; j < 26; j++) {
                    if (cost[i][k] + cost[k][j] < cost[i][j])
                        cost[i][j] = cost[i][k] + cost[k][j];
                }
            }
        }
        long ans = 0;
        boolean impossible = false;
        for (int i = 0; i < str.length() / 2; i++) {
            int x = str.charAt(i) - 'a', y = str.charAt(str.length() - 1 - i) - 'a';
            if (x != y) {
                long min = Math.min(cost[x][y], cost[y][x]);
                if (min == MAX) {
                    impossible = true;
                } else {
                    ans += min;
                }
            }
        }
        System.out.print(impossible ? "Cannot be a palindrome with the given inputs." : ans);
    }

}
