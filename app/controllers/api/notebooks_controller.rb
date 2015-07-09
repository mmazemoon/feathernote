module Api
  class NotebooksController < ApiController
    def create
      @notebook = current_user.notebooks.new(notebook_params)
      if @notebook.save
        # render json: @notebook
        render :show
      else
        render json: @notebook.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @notebook = current_user.notebooks.find(params[:id])
      render :show
    end

    def update
      @notebook = current_user.notebooks.find(params[:id])
      render :show
    end

    def destroy
    end

    def index
      @notebooks = current_user.notebooks
      render :index
    end

    private
    def notebook_params
      params.require(:notebook).permit(:name)
    end
  end
end
