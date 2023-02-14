<?php
  namespace App\Http\Controllers;
  use Illuminate\Http\Request;
  use App\Models\Blog;

  
class CkeditorController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }
    public function blog()
    {
        $data = Blog::all();
        return view('blog', ['data' => $data]);
    }
  
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        if ($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . $extension;
    
            $request->file('upload')->move(public_path('media'), $fileName);
    
            $url = asset('media/' . $fileName);
            return response()->json(['fileName' => $fileName, 'uploaded'=> 1, 'url' => $url]);
        }
    }
    public function store(Request $request)
   {
       $input = $request->all();
       Blog::create($input);
       return view('index');
    //    return redirect('/ckeditor')->with('flash_message', 'New Product Addedd!');  
   }
}