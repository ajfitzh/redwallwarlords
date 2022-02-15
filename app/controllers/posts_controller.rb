class PostsController < ApplicationController

      def index
        render json: Post.all
      end

          #GET post/:id
    def show
      post = Post.find_by(id: params[:id])
      if post
          render json: post, include: ['user', 'comments.user']
      else
          render json: {error: "post not found" }, status: :not_found
      end
  end
    
      def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
      end
    
      private
    
      def post_params
        params.permit(:content, :title, :user_id)
      end

end
