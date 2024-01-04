#include<iostream>
#include<vector>
#include<queue>
#include<stack>
using namespace std;

vector<vector<int>> map(25,vector<int>(31,0));

void Init()
{
    for(int i = 0; i < 25; i++)
    {
        if((i+3)%5 == 0)
            continue;
        for(int j = 0; j < 31; j++)
        {
            if((j+1)%4 != 0)
            {
                map[i][j] = 1;
            }
        }
    }
}

void show(vector<vector<int>> map)
{
    for(int i = 0; i < 25; i++)
    {
        for(int j = 0; j < 31; j++)
        {
            cout<<map[i][j]<<" ";
        }
        cout<<endl;
    }
}


vector<vector<pair<int,int>>> from(25,vector<pair<int,int>>(31,{-1,-1}));
int dir[4][2] = {0,1,0,-1,1,0,-1,0};
void BFS(vector<vector<int>>& map,vector<vector<bool>>& visited,int x,int y,int targetx,int targety)
{
    queue<pair<int,int>> queue;
    queue.push({x,y});
    visited[x][y] = true;

    while(!queue.empty())
    {
        pair<int,int> frontPoint = queue.front();
        queue.pop();
        int curx = frontPoint.first;
        int cury = frontPoint.second;
        for(int i = 0; i < 4; i++)
        {
            int nextx = curx+dir[i][0];
            int nexty = cury+dir[i][1];

            //cout<<"nextx:"<<nextx<<" nexty:"<<nexty<<endl;

            if(nextx == targetx && nexty == targety)
            {
                from[targetx][targety] = {curx,cury};
                return ;
            }

            if(nextx<0||nextx>=map.size()||nexty<0||nexty>=map[0].size())
                continue;
            
            if(!visited[nextx][nexty] && map[nextx][nexty] == 0)
            {
                visited[nextx][nexty] = true;
                //cout<<"push"<<"x:"<<nextx<<" y:"<<nexty<<endl;
                queue.push({nextx,nexty});
                from[nextx][nexty] = {curx,cury};
            }
        }
    }
}

vector<pair<int,int>> getPath(vector<vector<pair<int,int>>> from,int targetx,int targety)
{
    stack<pair<int,int>> stack;
    int x = targetx;
    int y = targety;
    while(x!=-1||y!=-1)
    {
        stack.push({x,y});
        pair<int,int> fromPoint = from[x][y];
        x = fromPoint.first;
        y = fromPoint.second;
    }

    vector<pair<int,int>> path;
    while(!stack.empty())
    {
        path.push_back(stack.top());
        stack.pop();
    }
    return path;
}


void show_path(vector<pair<int,int>> path)
{
    int i;
    pair<int,int> point;
    for(i = 0; i < path.size()-1; i++)
    {
         point = path[i];
        cout<<"("<<point.first<<","<<point.second<<")"<<"-->";
    }
    point = path[i];
    cout<<"("<<point.first<<","<<point.second<<")";

}


void show_from(vector<vector<pair<int,int>>> from)
{
    for(int i = 0; i < from.size(); i++)
    {
        for(int j = 0; j < from[0].size(); j++)
        {
            pair<int,int> pairPoint = from[i][j];
            if(pairPoint.first != -1 && pairPoint.second != -1)
                cout<<"("<<pairPoint.first<<","<<pairPoint.second<<") ";
        }
        cout<<endl;
    }
}



int main()
{
    Init();
    show(map);
    vector<vector<bool>> visited(25,vector<bool>(31,false));
    //show_from(from);
    int startx,starty,endx,endy;
    cout<<"please input the start point(x,y)"<<endl;
    cin>>startx>>starty;
    cout<<"please input the end point(x,y)"<<endl;
    cin>>endx>>endy;

    BFS(map,visited,startx,starty,endx,endy);
    //show_from(from);
    vector<pair<int,int>> path = getPath(from,endx,endy);
    show_path(path);
}